var express = require('express');
var routerAuthors = express.Router();

var authorsController = require('../controllers/authorsController.js');

routerAuthors.get('/', authorsController.list);

routerAuthors.get('/create', authorsController.createGet);

routerAuthors.post('/create', authorsController.createPost);

routerAuthors.get('/:id/delete', authorsController.deleteGet);

routerAuthors.post('/:id/delete', authorsController.deletePost);

routerAuthors.get('/:id/update', authorsController.updateGet);

routerAuthors.post('/:id/update', authorsController.updatePost);

routerAuthors.get('/:id', authorsController.detail);



module.exports = routerAuthors;
