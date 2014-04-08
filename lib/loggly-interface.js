/* jslint node: true */
'use strict';

/*
* @name /lib/tapestry-logger-loggly.js
* @description A Tapestry logger module to send logs to Loggly
* @since Wed Feb 12 2014
* @author Kevin Hodges <kevin.hodges@holidayextras.com>
*/

( function() {

	var http = require( 'http' );

	/**
	* Constructor for a Loggly object
	* @param {Object} connectionOptions, proxies whatever is passed in to Tapestry as the logger.connection
	*/
	var loggly = function( connectionOptions ) {
		this.connection = connectionOptions;
	};

	exports = module.exports = loggly;

	/**
	* Push to Loggly the passed value
	* @param {Object} options:
	* - service, tell Loggly who this log is from, probably the name of your app/module
	* - type, payload? error? system log?
	* - namespace, which of the services "buckets" should we throw this in?
	* @param {Object} log, the object to push to Loggly
	*/
	loggly.prototype.log = function( options, log ) {

		var self = this;
		// if we have stuff...
		if( options.service && options.type && options.namespace && log ) {
			// the options make up our tags to Loggly
			var httpOptions = {
				hostname: self.connection.host,
				port: 80,
				path: '/' + self.connection.path + '/' + self.connection.key + '/tag/' + options.service + ',' + options.type + ',' + options.namespace,
				method: 'POST'
			};
			var request = http.request( httpOptions );
			// add the namespace to the log
			log.namespace = options.namespace;
			// ensure the log is a string
			if( typeof log !== 'string' ) {
				log = JSON.stringify( log );
			}
			// write data to request body
			request.write( log );
			request.end();
		}

	};

} )();