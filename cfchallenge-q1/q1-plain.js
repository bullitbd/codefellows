// js for q1-plain.html

function makeTable() {
	var tbl = "<table id='coders'>";
	tbl += "<thead><tr><th>Name</th><th>Occupation</th><th>Awesome Index</th></tr></thead>";
	for (var i = 0; i < arr.length; i++) {
		tbl += "<tr>";
		for (var j in arr[i]) {
			tbl += "<td>" + arr[i][j] + "</td>";
		}
		tbl += "<tr>";
	}
	tbl += "</table>";

	document.write(tbl);
}

function average() {
	var count=0, total=0;
	for (var i=0; i<arr.length; i++) {
		if(arr[i].hasOwnProperty('awesomeIndex') && typeof arr[i].awesomeIndex === 'number' ) {
			total += arr[i].awesomeIndex;
			count++;
		}
	}
	result = Math.round(total/count * 100) / 100;
	document.write('<i>The Awesome Index Average is: ' + result);
}

// Make class for add button & form...
/*function Person() {
	this.name = '';
	this.occupation = '';
	this.awesomeIndex = null;
}	

function addPerson() {

}*/



var arr = [
{
name: 'Fred',
occupation: 'programmer',
awesomeIndex: 10,
},

{
name: 'Bob',
occupation: 'programmer',
awesomeIndex: 7,
},

{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9,
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
}
];