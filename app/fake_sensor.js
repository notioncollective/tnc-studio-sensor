var util = require('util'),
		childProcess = require('child_process'),
		pin = process.argv[3] || "4"
		out = 'Using pin #'+pin+'\nData (40): 0x1e 0x0 0x21 0x0 0x3f\nTemp = 33 *C, Hum = 30 %';
		
console.log(out);