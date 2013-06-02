var exec = require('child_process').exec,
	// cmd = 'echo Test',
	cmd = './lib/Adafruit_DHT_Driver/Adafruit_DHT 11 4',
	interval = setInterval(getTemp, 3000);

function getTemp() {
	var child = exec(cmd, function(error, stdout, stderr) {
		console.log('stdout: '+stdout);
		console.log('stderr: '+stderr);

		if(error !== null) {
			console.log('exec error: '+error);
		}
	});

	return child;
}

