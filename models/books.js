//Destructure Schema and model from mongoose
const { Schema, model } = require('mongoose');
 
const booksSchema = Schema({
   title: { type: String, required: true },
   url: { type:String , default: true },
  
});
 
const Books = model('books', booksSchema);
module.exports = Books