const booksManager = require("../models/bookModel");

describe("Books -> CRUD tests", () => {
  let booksStorage;
  let bookModel;

  beforeEach(() => {
    bookBuilderInstanse = booksManager.getBookBuilderInstanse;

    let BookBuilder = booksManager.getBookBuilderClass();

    let book = new BookBuilder().setId(1)
    .setName('Book 1')
    .setPrice(250)
    .setDescription('Description 1')
    .setPublished(new Date("2032-01-26"))
    .setIdAuthor(1)
    .build();

    let bookWithPrimaryDiscount = booksManager.getPrimaryDiscount(book).getBook();
    bookWithPrimaryDiscount = booksManager.getBasicDiscount(bookWithPrimaryDiscount).getBook();


    const books = [
      bookWithPrimaryDiscount,
      new BookBuilder().setId(2).setName('Book 2').setPrice(123).setDescription('Description 2').setPublished(new Date("2032-01-26")).setIdAuthor(2).build(),
      new BookBuilder().setId(3).setName('Book 3').setPrice(154).setDescription('Description 3').setPublished(new Date("2012-01-26")).setIdAuthor(3).build(),
      new BookBuilder().setId(4).setName('Book 4').setPrice(237).setDescription('Description 4').setPublished(new Date("2020-01-26")).setIdAuthor(2).build(),
    ];

    booksStorage =  booksManager.getBooksStorage(books);
  });

  it("Test books add by range", () => {
      let BookBuilder = booksManager.getBookBuilderClass();
	    const obj = new BookBuilder().setId(5).setPrice(342)
      .setName('Book 5')
      .setDescription('Description 5')
      .setPublished(new Date("2032-01-26"))
      .setIdAuthor(1)
      .build();

      expect(booksStorage.add(obj).get(5).id).toBe(obj.id);
  });

	it("Test books get by range", () => {
    expect(booksStorage.get(1).id).toBe(1);
  });

	it("Test books remove by range", () => {
    expect(booksStorage.remove(3).get(3)).toBeNull();
  });
  
	it("Test books update by range", () => {
    let BookBuilder = booksManager.getBookBuilderClass();
    const obj = new BookBuilder().setId(3).setPrice(45)
    .setName('Book 15')
    .setDescription('Description 15')
    .setPublished(new Date("2023-01-26"))
    .setIdAuthor(1).build();
    expect(booksStorage.update(obj).get(3).name).toEqual(obj.name);
  });
});

// expect(filteredProducts).toHaveLength(2);
//    expect(filteredProducts).toContainEqual({ name: 'tomato', price: 26 });
//    expect(filteredProducts).toEqual([{ name: 'tomato', price: 26 }, { name: 'banana', price: 29 }]);
//    expect(filteredProducts[0].price).toBeGreaterThanOrEqual(FROM);
//    expect(filteredProducts[1].price).toBeLessThanOrEqual(TO);
//    expect(filteredProducts).not.toContainEqual({ name: 'orange', price: 38 });
