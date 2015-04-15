// admin.js


var 
	Library = require('./library'),
	Book = require('./book').Book,
	Shelf = require('./shelf'),
	Admin = require('./admin');

exports.genres = ['fiction','history','classics','reference','nutrition','philosophy','drama','thriller','politics','economics'];
exports.bookList = [
		{"title": "Moby Dick", "author": "Melville, Herman", "genre": "classics"},
		{"title": "For One More Day", "author":"Mitch Albom", "genre": "philosophy"},
		{"title": "Cross",  "author": "James Patterson", "genre": "fiction"},
		{"title": "Dear John", "author": "Nicholas Sparks", "genre": "fiction"},
		{"title": "Next", "author": "Michael Crichton", "genre": "drama"},
		{"title": "Hannibal Rising", "author": "Thomas Harris", "genre": "thriller"},
		{"title": "You: On a Diet—The Owner's Manual for Waist Management", "author": "Michael F. Roizen, M.D.", "genre": "nutrition"},
		{"title": "Marley & Me", "author": "John Grogan", "genre": "autobiography"},
		{"title": "The Audacity of Hope", "author": "Barack Obama", "genre": "history"},
		{"title": "Culture Warrior", "author": "Bill O'Reilly", "genre": "fiction"},
		{"title": "Guinness World Records 2007", "author": "Guinness World Records", "genre": "reference"},
		{"title": "The Best Life Diet", "author": "Bob Greene", "genre": "nutrition"},
		{"title": "The World Is Flat", "author": "Thomas L. Friedman", "genre": "economics"},
		{"title": "State of Denial: Bush at War, Part III", "author": "Bob Woodward", "genre": "history"}
	];

	// forms etc for gui here
		