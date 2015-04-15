// js for q1-lodash.html

function makeTable() {
	var tbl = "<table id='coders'>";
	tbl += "<thead><tr><th>Name</th><th>Occupation</th><th>Awesome Index</th></tr></thead>";	
	_.forEach(people, function(person) {
		tbl += "<tr>";
		_.forOwn(person, function(prop) {
			tbl += "<td>" + prop + "</td>";
		});

		tbl += "<tr>";
	});
	
	tbl += "</table>";

	$('#tbldiv').append(tbl);
}

function average() {
	var count=0, total=0;
	_.forEach(people, function(person) {
		if(person.hasOwnProperty('awesomeIndex') && typeof person.awesomeIndex === 'number') {
			total += person.awesomeIndex;
			count++;
		}
	});
	result = Math.round(total/count * 100) / 100;
	$('#awesome-index').append('<i>The Awesome Index Average is: ' + result);
}

// Make class for add button & form...
/*function Person() {
	this.name = '';
	this.occupation = '';
	this.awesomeIndex = null;
}	

function addPerson() {

}*/



var people = [
{
name: 'Fred',
occupation: 'programmer',
awesomeIndex: 10
},

{
name: 'Bob',
occupation: 'programmer',
awesomeIndex: 7
},

{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
}
];