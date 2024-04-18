const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
//It is done when the `bookSchema` has two properties: `title` and `price`.
const bookSchema = new mongoose.Schema({
title: { type: String, required: true },
price: Number,
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

// Uses mongoose.model() to create model
const Library = mongoose.model('Library', librarySchema);



// TODO: Create a new instance of the model including the subdocuments
// Uses model to create new instance including subdocument
const bookData = [
  { title: 'Doreamon', price: 40000 },
  { title: 'Dragon Ball', price: 50000 },
  { title: 'Chu Tieu Vui Ve', price: 30000.22 },
];
Library
  .create({ name: 'Books', books: bookData })
  .then(data => console.log(data))
  .catch(err => console.log(err));




module.exports = Library;
/*

* It is done when I have created a model named `Library`.

* It is done when I have created an array of three books using the `bookSchema`.

* It is done when I have created a new instance of the `Library` model which includes the `books` subdocument.

* It is done when I test the `GET` route in Insomnia and the subdocuments are nested in the parent document.

*/