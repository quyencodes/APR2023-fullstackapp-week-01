// import mongoose
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

// connect to db instance via uri
mongoose.connect(`${process.env.URI}`).then(() => {
  console.log(`Connected to database successfully`)
})

// create schema
const anime_schema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  watched: {
    type: Boolean,
    default: false
  }
})

// create model
const animedb = mongoose.model('anime', anime_schema)

// export model
export default animedb