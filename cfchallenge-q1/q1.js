var total = 0;
var count = 0;
var arr = [
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

for (var i=0; i<arr.length; i++) {
	var idx = 'awesomeIndex';  //just to shorten 'awesomeIndex'
	
	// it is assumed that Zaphod, being President of the Galaxy, is
	// supremely awesome and, therefor, not rated.  Any such unrated
	// individuals will not be included in the calculation.
	
	if(arr[i].hasOwnProperty(idx)) {
		total += arr[i][idx];
		count++ 
	}
}
console.log(total/count);