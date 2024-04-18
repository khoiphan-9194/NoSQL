const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
// Schemas define the shape of the documents within the collection.


const bookSchema = new mongoose.Schema(
    {
        title: { type: String, require: true },
        author: String,
        price: Number,
    }
);

// TODO: Create a custom instance method named `getDiscount`

// Schemas can also define methods that act on an instance of the model or document
// This custom method extends the methods object
bookSchema.methods.getDiscount = function () {
    // The 'this' keyword is used to specify the properties belonging to the particular instance

    return `This book has the title ${(this.title)} with the price discounted of 50%: ${(this.price / 2)}`

};


// TODO: Create a model named `Book`

const Book = mongoose.model('Book', bookSchema);
// TODO: Create a new instance of the model

const discountedBook = new Book({ title: "Doreamon", author: "HeoMap", price: 50000.00 })



// Documents have access to a range of built-in instance methods like get()
const responseGetInstance = discountedBook.get('author');
console.log(
    `The value of the author for this document is ${responseGetInstance}`
);
// TODO: Call the custom instance method on the instance
console.log(discountedBook.getDiscount());

module.exports = Book;
