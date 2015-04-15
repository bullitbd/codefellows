//module book.js

var Book = function(author, title, genre) {
	this.title = title;
	this.author = author; //...needs to be array firstname & lastname & other data...
	this.genre = genre;
	this.bookId = '';
	

Book.prototype.calcId = function() {
	return (this.author + '_' + this.title).replace(/\W/g, ''); //...as a quick id
};
};



exports.Book = Book;