var fs = require('fs'),
	exec = require('child_process').exec,

	config = JSON.parse(fs.readFileSync('config.json', encoding='ascii')),
	// cmd = 'echo Test',
	cmd = config.script+' '+config.device+' '+config.pin,
	interval = setInterval(getTemp, 3000);

console.log(cmd);

function getTemp() {
	var child = exec(cmd, function(err, stdout, stderr) {
		var lines,
				matches,
				temp,
				hum,
				data;
		
		if(!err) {
			lines = stdout.split('\n');
			if(lines[2]) {
				matches = /Temp = (\d+) \*C\, Hum = (\d+) \%/.exec(lines[2]);
				if(matches) {
					temp = matches[1];
					hum = matches[2]
				}
			}
			
			// data goes in an object
			data = {
				temp: temp,
				hum: hum
			}
			
			console.log(data);
			
		} else {
			console.log("There was an error!\n"+stderr);
		}
	});

	return child;
}

