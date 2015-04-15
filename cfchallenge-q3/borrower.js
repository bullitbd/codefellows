// borrower.js


function Borrower(uid) { //from db...
	this.uid = uid;
	this.books = [];
	this.overdue = [];
	// ...

}

Borrower.prototype.borrowBook = function(id) {
	// body...
	var now = new Date();

};
Borrower.prototype.returnBook = function(id) {
	// body...
};

exports.Borrower = Borrower;