const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema ({
  title: String,
  year: Date
})


const authorSchema = new mongoose.Schema ({
  _id: Mixed,
  name: String,
  age: Number,
  books: [booksSchema],
})


const Author = mongoose.model("Author", authorSchema);
module.exports = Author;

