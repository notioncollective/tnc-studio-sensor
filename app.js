var fs = require('fs'),
	exec = require('child_process').exec,
	child;

	config = JSON.parse(fs.readFileSync('config.json', encoding='ascii')),
	// cmd = 'echo Test',
	cmd = config.script+' '+config.device+' '+config.pin,
	interval = setInterval(getTemp, 3000);


/**
 * Runs Adafruit script to grab the temp
 */
function getTemp() {
	child = exec(cmd, function(err, stdout, stderr) {
		var lines,
				matches,
				temp,
				hum,
				data;
		
		if(!err) {
			lines = stdout.split('\n');
			// make sure there's a line with the temp/humidity data
			// sometimes we don't get data back
			if(lines[2]) {
				matches = /Temp = (\d+) \*C\, Hum = (\d+) \%/.exec(lines[2]);
				if(matches) {
					temp = matches[1];
					hum = matches[2]
				}
				
				// data goes in an object
				data = {
					temp_celsius: temp,
					percent_hum: hum
				}
				
				console.log(data);
		
			}
			
		} else {
			console.log("There was an error!\n"+stderr);
		}
	});

	return child;
}

