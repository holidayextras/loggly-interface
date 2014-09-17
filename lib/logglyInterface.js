/* jslint node: true */
'use strict';

/*
* @name /lib/tapestry-logger-loggly.js
* @description A Tapestry logger module to send logs to Loggly
* @since Wed Feb 12 2014
* @author Kevin Hodges <kevin.hodges@holidayextras.com>
*/
var https = require( 'https' );
var path = require( 'path' );

/**
* Constructor for a Loggly object
* @param {Object} connectionOptions, proxies whatever is passed in to Tapestry as the logger.connection
*/
function Loggly( connectionOptions ) {
	this.connection = connectionOptions;
};

/**
* Push to Loggly the passed value
* @param {Object} options:
* - service, tell Loggly who this log is from, probably the name of your app/module
* - type, payload? error? system log?
* - namespace, which of the services "buckets" should we throw this in?
* @param {Object} log, the object to push to Loggly
*/
Loggly.prototype.log = function( options, log ) {
	try {
		var self = this;
		// if we have stuff...
		if( log && options && options.service && options.type && options.namespace ) {

			// generate our tag based on options passed in
			var tag = [ options.service, options.type, options.namespace ].join( ',' );

			var httpsOptions = {
				hostname: self.connection.host,
				port: 443,
				// build a path containing our tag for loggly
				path: path.join( self.connection.path, self.connection.key, 'tag', tag ),
				method: 'POST'
			};
			// add the namespace to the log
			log.namespace = options.namespace;
			// ensure the log is a string
			if( typeof log !== 'string' ) {
				log = JSON.stringify( log );
			}
			var request = https.request( httpsOptions );
			// write data to request body
			request.write( log );
			request.end();
		}
	} catch ( error ) {
		console.log( 'Loggly interface encountered an exception ' + error );
	}
};

exports = module.exports = Loggly;
