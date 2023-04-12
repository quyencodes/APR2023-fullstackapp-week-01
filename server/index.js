// import express and other libraries
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { animedb } = require('./db.js');
const dotenv = require('dotenv');
const { getOne, getAll, createOne, updateOne, deleteOne } = require('./model.js')

// create express app
const app = express()
dotenv.config()

// middlewares
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

app.get('/anime', (req, res) => {
  getAll()
  .then((animes) => res.status(200).json(animes))
  .catch(err => console.log(err))
})

app.post(('/anime'), (req, res) => {
  const body = req.body
  createOne(body.title, body.description)
  .then((newAnime) => res.status(200).json(newAnime))
  .catch(err => console.log(err))
})

app.put('/anime/:id', (req, res) => {
  const id = req.params.id
  updateOne(id)
  .then((anime) => res.status(200).json(anime))
  .catch(err => console.log(err))
})

app.delete('/anime/:id', (req, res) => {
  const id = req.params.id
  deleteOne(id)
  .then((deletedAnime) => res.status(200).json(deletedAnime))
  .catch(err => console.log(err))
})

// set up a connection
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server connected successfully to port ${PORT}`)
})