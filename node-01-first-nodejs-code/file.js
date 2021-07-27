const fs = require('fs');
const { setFlagsFromString } = require('v8');


fs.readFile('user-data.txt', (err, data) => {
	if (err) {
		console.log(err);
		return;
	} 
	console.log(data.toString());
});

fs.writeFile('user-data.txt', 'username=Valdir', err => {
	if (err) {
		console.log(err);
	} else {
		console.log('Wrote to file!');
	}
});

