var express = require('express');
var app = express();

var homeRouter = require('./routes/homeRouter.js');
var booksRouter = require('./routes/booksRouter.js');
var authorsRouter = require('./routes/authorsRouter.js');

const port = 8080;

app.use(function (req, res, next) {
  console.log('Middleware Called For You:', Date.now());
  next();
});

app.use('/staticFiles', express.static('views'));

app.use('/', homeRouter);
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

app.use(function (req, res) {
  res.status(404).send('Not Found');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
