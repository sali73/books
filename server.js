const express = require ('express')
const app = express()
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001

const booksController = require('./controllers/books.js');
const db = mongoose.connection
const MONGODB_URI =process.env.MONGODB_URL || 'mongodb://localhost:27017/books';
const cors = require('cors');
// app.js or server.js
require('dotenv').config()
// REST OF YOUR CODE

// CORS
// Whitelist, API will accept calls from this address
const whitelist = ['http://localhost:3001'];

const corsOptions = {
   origin: function (origin, callback) {
       if (whitelist.indexOf(origin) !== -1) {
           callback(null, true);
       } else {
           callback(new Error('Not allowed by CORS'));
       }
   },
};



 ////////////////////////
//db connection
//////////////////////


mongoose.connect(MONGODB_URI, {
   useNewUrlParser: true,
    useUnifiedTopology: true });
db.on('open', () => {
   console.log('connected to mongoose...');
});


////////////////////
//Middelwear
////////////////////
app.use(cors()); // Adding cors to allow API to be called
app.use(express.json())
app.use('/books', booksController);
// app.get('/' , (req,res)=>{
//     res.send('hello')
// })

 
app.listen (PORT , ()=>{
   console.log(`listening on port ${PORT}`)
})