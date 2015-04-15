// library.js



var
	Shelf = require('./shelf'),
	Book = require('./book'),
	Borrower = require('./borrower');



function Library(name) { // build these classes as mongo objects...
     this.name = name;
     this.shelves = [];
     this.catalog = []; 
     this.borrowers = []; // list of type Borrower
}
Library.prototype.addShelf = function(genre) { // (tran is gift, purchase, return...)
	var patt = new RegExp('\^' + genre + '\$');
	if (!patt.test(this.shelves)) {
		var shelf = new Shelf(genre);
		this.shelves.push(shelf);
	} else {
		console.log('There\'s already a ' + genre + 'shelf in the Library!');
	}

};
// Acquire new book, put in catalog
Library.prototype.addNewBook = function(form) { // param array author, title, genre, source, whatever else needed
	// => admin form function call;
	var catalog = library.catalog;
	var book = new Book();
	book.author = form.author;
	book.title = form.title;
	book.genre = form.genre;
	book.bookId = book.calcId();
	// find out if book in catalog;
		// loop through catalog objects
		//catalog.forEach(function {
			// if elem's title and author === this.title & author
				// function to make the id's represent different copies...
			// else :
		library.catalog.push(book);
	// shelve book:
	// find shelf:
};

// return borrowed book; 
Library.prototype.bookReturn = function(id, borrower) { 
	// find book record
	this.findBook(id);
	// add to shelf
	var patt = new RegExp('\^' + book.genre + '\$');
	var s = this.shelves;
	for (var i = 0; i < s.length; i++) {
		if (patt.test(s[i].genre)) {
			s[i].books.push(book);  
			var found = true;
			break;
		}
	}
	// if no shelf, add one and push the book
	if (!found) {
		this.addShelf(genre);  // add this to addShelf with test...
		s[s.length-1].push(book);
	}

};
	// look up borrower record
	// credit appropriate borrower for return
	// else credit borrower - call rtnBook(borrower)
	// shelf.addbook(genre, bookId)

Library.prototype.lendBook = function(bookid, borrower) { 
	// debit borrower - call borrower.brwBook
	// call shelf.takeBook
};

Library.prototype.tossBook = function(id) { // dispose of books

};

Library.prototype.findBook = function(id) {
	var book = {};
	var cat = this.catalog;
	var patt = new RegExp('\^' + id + '\$');
	for (var i = 0; i < cat.length; i++) {
		if ( patt.test(cat[i].bookId )) {
			book = cat[i];
			break;
		}  // else error - can't find it...
	}
}

module.exports = Library;




