var fs = require('fs'),
	exec = require('child_process').exec,

	config = JSON.parse(fs.readFileSync('config.json', encoding='ascii')),
	// cmd = 'echo Test',
	cmd = config.script+' '+config.device+' '+config.pin,
	interval = setInterval(getTemp, 3000);

console.log(cmd);

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

