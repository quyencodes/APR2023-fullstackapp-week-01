const { animedb } = require('./db.js')

module.exports = {
  getOne: function(id) {
    const query = animedb.findById(id)
    return query
  },

  getAll: function() {
    const query = animedb.find({}) // finds all documents
    return query
  },

  createOne: function(title, description) {
    const query = animedb.create({
      "title": title,
      "description": description,
    })
    return query
  },

  updateOne: function(id) {
    const record = animedb.findById(id)
    const query = animedb.updateOne({"_id": id}, {watched: !record.watched})
    return query
  },

  deleteOne: function(id) {
    const query = animedb.findByIdAndDelete(id)
    return query
  }
}