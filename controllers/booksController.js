// var BookModel = require('../models/bookModel');
var path = require('path');
var views = path.join(__dirname, '../views');

// Display list of all BookInstances.
exports.list = function (req, res) {
  res.sendFile(path.join(views, 'books', 'list.html'));
};

// Display detail page for a specific BookInstance.
exports.detail = function (req, res) {
  res.send('<h3>Book Detail: ' + req.params.id + '<h3>');
};

// Handle BookInstance create on POST.
exports.create = function (req, res) {
  res.send('<h3>Books storage: Create Post<h3>');
};

// Handle BookInstance delete on POST.
exports.delete = function (req, res) {
  res.send('<h3>Books storage: Delete Post<h3>');
};

// Handle bookinstance update on POST.
exports.update = function (req, res) {
  res.send('<h3>Books storage: Update Post<h3>');
};
