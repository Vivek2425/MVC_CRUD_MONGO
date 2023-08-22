const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.CONNECTIONSTRING);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
//SCHEMA
const BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  });
const Book = mongoose.model('Book', BookSchema, "books"); //MODEL
module.exports = Book;