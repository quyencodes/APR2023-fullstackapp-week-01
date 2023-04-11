// import express
import animedb from './db.js'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

// create an express application
const app = express()

// middlewares
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
dotenv.config()

// routes
app.get('/fakeroute', (req, res) => {
  res.status(200).json('i am here')
})

// connect to localhost
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`)
})