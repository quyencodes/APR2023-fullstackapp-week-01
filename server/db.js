// import mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv')
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
  description: String,
  watched: {
    type: Boolean,
    default: false
  }
})

// create model
const animedb = mongoose.model('animedb', anime_schema)

// export model
module.exports = {
  animedb
}