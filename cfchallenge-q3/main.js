// codefellows project 3/14/15
// Library Class exercise
//
// Classes:
// 	Libraries,
// 	Shelves,
// 	Books,
// 	Borrowers
//
// Library Relationships:
//
// 	Libraries have		Libraries do:
// 		shelves             create shelves
// 		books 				add new books
// 		a catalog []		lend books
// 		Borrowers 			get borrower returns
// 							add books to shelves
// 							remove books from shelves
// 							dispose of books
//
//
// Shelves have: 		Shelves do:
// 		books [] 			add books
// 		genre 				remove books
// 		...  				sort books
//
// Books have:
// 	...
//
//
//


var Library = require('./library');
var Book = require('./book').Book;
var Shelf =require('./shelf');
var Admin = require('./admin');

// assuming that each Library in own namespace, so only using
// 'library' here.




function setup() {
	// set up library
	var library = new Library('Douglas Truth');
console.log(library);
	// set up shelves
	var genres = Admin.genres;
	for (var i = 0; i < genres.length; i++) {
		library.addShelf(genres[i]);
	}

	// add books:
	var bookList = Admin.bookList;

	// add new Books to catalog:
	for (var j = 0; j < bookList.length; j++) {
		e = bookList[j];
		book = new Book (e.author, e.title, e.genre); //book module
		// calculate bookId
		book.bookId = book.calcId();
		library.catalog.push(book);
	}

	console.log(library.catalog);
	console.log(library.shelves);
}

setup();

