var express = require('express');
var routerBooks = express.Router();

var booksController = require('../controllers/booksController.js');


routerBooks.get('/', booksController.list);

routerBooks.post('/create', booksController.create);

routerBooks.delete('/:id/delete', booksController.delete);

routerBooks.put('/:id/update', booksController.update);

routerBooks.get('/:id', booksController.detail);

module.exports = routerBooks;
