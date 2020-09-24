const express = require('express');
const router = express.Router();
const Books = require('../models/books.js');
 
/////////////////// 
//Index Route
//////////////////
//==| CREATE |
router.post('/', async (req, res) => {
    try {
        const createdBookmark = await Books.create(req.body);
        Books.find({}, (err, docs) => {console.log(docs)})
        res.status(200).json(createdBookmark);
    }
    catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
});

//==| INDEX |
router.get('/', async (req, res) => {
    try {
        const bookmarks = await Books.find({})
        res.status(200).json(bookmarks)
    }
    catch (error) {
        res.status(400).json(error);
    }
});

//==| DELETE |
router.delete('/:id', async (req, res) => {
    try {
        const deletedbookmark = await Books.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedbookmark);
    } catch (error) {
        res.status(400).json(error);
    }
});

//==| UPDATE |
router.put('/:id',  async (req, res) => {
    try {
        const updatedBookmark= await Books.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json(updatedBookmark);
    } catch (error) {
        res.status(400).json(error);
    }
});
//=============================================================================| ROUTES END |

//==| EXPORT ROUTER |
module.exports = router;