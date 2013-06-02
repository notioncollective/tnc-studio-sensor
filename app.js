var exec = require('child_process').exec,
	child,

	cmd = './lib/Adafruit_DHT_Driver/Adafruit_DHT 11 4'

child = exec(cmd, function(error, stdout, stderr) {
	console.log('stdout: '+stdout);
	console.log('stderr: '+stderr);

	if(error !== null) {
		console.log('exec error: '+error);
	}
});