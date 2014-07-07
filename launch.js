var LogglyInterface = require( './lib/loggly-interface.js' );
var log = { data: 'testData' };

var logglyInterface = new LogglyInterface( {
	'host': 'logs-01.loggly.com',
	'path': 'inputs',
	'key': '6a84d559-2e32-4a88-8008-0383dc6b7b1d'
} );

logglyInterface.log( { service: 'testLaunch2', type: 'payload', namespace: 'testNamespace' }, log );