/* jslint node: true */
'use strict';

var path = require( 'path' );
var request = require( 'request' );
var url = require( 'url' );

/**
* Constructor for a Loggly object
* @param {Object} connectionOptions, proxies whatever is passed in to Tapestry as the logger.connection
*/
function Loggly( connectionOptions ) {
	this.connection = connectionOptions;
}

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

			// ensure the log is a string
			if( typeof log !== 'string' ) {
				// add the namespace to the log
				log.namespace = options.namespace;
				log = JSON.stringify( log );
			}

			var httpsOptions = {
				baseUrl: url.format( {
					protocol: 'https',
					hostname: self.connection.host,
				} ), //URL to hit
				uri: path.join( '/', self.connection.path, self.connection.key, 'tag', tag ),
				body: log //Set the body as a string
			};

			request.post( httpsOptions );
		}
	} catch ( error ) {
		console.log( 'Loggly interface encountered an exception ' + error );
	}
};

exports = module.exports = Loggly;
