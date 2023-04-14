import animedb from './db.js';

export function getOne(id) {
  const query = animedb.findById(id)
  return query
}

export function getAll() {
  const query = animedb.find({}) // finds all documents
  return query
}

export function createOne(title, description) {
  const query = animedb.create({
    "title": title,
    "description": description,
  })
  return query
}

export function updateOne(id) {
  const record = animedb.findById(id)
  const query = animedb.updateOne({"_id": id}, {watched: !record.watched})
  return query
}

export function deleteOne(id) {
  const query = animedb.findByIdAndDelete(id)
  return query
}
