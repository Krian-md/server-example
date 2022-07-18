class Book {
  constructor({ id, name, price, description, published, idAuthor }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.published = published;
    this.idAuthor = idAuthor;
  }
}

class DecorationBookDiscount {
  getDescription() {}
}

class PrimaryDiscount extends DecorationBookDiscount {
  constructor(book) {
    super();
    this.book = book;
    this.getDescription();
    this.getPrice();
  }

  getDescription() {
    this.book.description += ', PrimaryDiscount';
  }

  getPrice() {
    this.book.price *= 0.85;
  }

  getBook() {
    return this.book;
  }
}

class SecondaryDiscount extends DecorationBookDiscount {
  constructor(book) {
    super();
    this.book = book;
    this.getDescription();
    this.getPrice();
  }

  getDescription() {
    this.book.description += ', SecondaryDiscount';
  }

  getPrice() {
    this.book.price *= 0.9;
  }

  getBook() {
    return this.book;
  }
}

class BasicDiscount extends DecorationBookDiscount {
  constructor(book) {
    super();
    this.book = book;
    this.getDescription();
    this.getPrice();
  }

  getDescription() {
    this.book.description += ', BasicDiscount';
  }

  getPrice() {
    this.book.price *= 0.95;
  }

  getBook() {
    return this.book;
  }
}

class BookBuilder {
  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setPrice(price) {
    this.price = price;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setPublished(published) {
    this.published = published;
    return this;
  }

  setIdAuthor(idAuthor) {
    this.idAuthor = idAuthor;
    return this;
  }

  build() {
    return new Book(this);
  }
}

class BooksStorage {
  constructor(books) {
    this.books = books;
  }

  add(book) {
    this.books.push(book);
    return this;
  }

  get(id) {
    const index = this._findIndexById(id);
    return index !== -1 ? this.books[index] : null;
  }

  remove(id) {
    this.books.splice(this._findIndexById(id), 1);
    return this;
  }

  update(book) {
    const index = this._findIndexById(book.id);
    if (index !== -1) {
      this.books.splice(index, 1, book);
    }
    return this;
  }

  _findIndexById(id) {
    return this.books.findIndex((item) => item.id === id);
  }
}

function getBooksStorage() {
  return new BooksStorage(...arguments);
}

function getBookBuilderClass() {
  return BookBuilder;
}

function getPrimaryDiscount() {
  return new PrimaryDiscount(...arguments);
}

function getSecondaryDiscount() {
  return new SecondaryDiscount(...arguments);
}

function getBasicDiscount() {
  return new BasicDiscount(...arguments);
}

module.exports = {
  getBooksStorage,
  getBookBuilderClass,
  getPrimaryDiscount,
  getSecondaryDiscount,
  getBasicDiscount,
};
