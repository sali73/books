const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');
 
/////////////////// 
//Index Route
//////////////////
router.post('/', async (req, res) => {
   try {
       const createdBook = await Books.create(req.body);
       res.status(200).json(createdBook);
   } catch (error) {
       res.status(400).json(error);
   }
});
router.get('/', async (req, res) => {
   try {
       const gitbooks = await Books.find({});
       res.status(200).json(gitbooks);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
///////////////////
//Delete Route
///////////////////
router.delete('/:id', async (req, res) => {
   try {
       const deletedBooks = await Books.findByIdAndRemove(req.params.id);
       res.status(200).json(deletedBooks);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
 ///////////////////
//Edit Route
///////////////////
router.put('/:id', async (req, res) => {
   try {
       const updatedBooks = await Books.findByIdAndUpdate(
           req.params.id,
           req.body,
           { new: true }
       );
       res.status(200).json(updatedBooks);
   } catch (error) {
       res.status(400).json(error);
   }
});
 
 
module.exports = router;
