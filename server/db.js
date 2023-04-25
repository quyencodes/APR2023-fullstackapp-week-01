// import mongoose
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config()

const URI = process.env.URI
// establish a connection via URI
mongoose.connect(`${URI}`).then(() => {
  console.log('Database connected successfully')
})

// create schema(s)
const anime_schema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    default: 'this is the default description',
  },
  watched: {
    type: Boolean,
    default: false
  }
})

// create model
const animedb = mongoose.model('animedb', anime_schema)

// export model
export default animedb