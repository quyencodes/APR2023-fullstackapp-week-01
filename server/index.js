// import express and other libraries
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import animedb from './db.js'
import { getOne, getAll, createOne, updateOne, deleteOne } from './model.js'

// create express app
const app = express()
dotenv.config()

// middlewares
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(express.static(__dirname + '/src'));


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
  .then((deletedAnime) => res.status(200).json('Deleted successfully'))
  .catch(err => console.log(err))
})

// set up a connection
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server connected successfully to port ${PORT}`)
})