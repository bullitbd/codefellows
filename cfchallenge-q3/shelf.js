// module shelf.js
// 
// TODO should actually 


function Shelf(genre) {
	this.genre = genre;
	this.books = [];
	this.CAPVOLS = 100;
	this.MAXVOLS = 80;
}

Shelf.prototype.addBook = function(book) {		
	// add item to books[]
	this.books.push(book); //shelves in reality have a capacity -
	//so should test for books.length > MAXVOLS and spawn new Shelf...
	//assuming an 'expandable' shelf.

	//sort by id
	this.books.sort(function(a, b) {
		var A = a.bookId.toLowerCase(), B = b.bookId.toLowerCase();
		if ( A < B ) {
			return -1;
		}
		if ( A > B ) {
			return 1;
		}
			return 0;
	});
};

Shelf.prototype.removeBook = function(shelf, bookid) {

	//set up regexp for test()
	var patt = new RegExp ('\^' + bookid + '\$');
	for (var i = 0; i < arr.length; i++) {
		if (patt.test(arr[i].bookid)) {
			books.splice(i, 1);
			//return true;
		}
	}
	// use patt to look up title & author in catalog, display "missing..." message
};

module.exports = Shelf;





