/* jslint node: true */
'use strict';

/*
* @name /Gruntfile.js
* @description Le Gruntfile...
*              keep this tidy, alphabeticised etc
* @since Wed Feb 26 2014
* @author Kevin Hodges <kevin.hodges@holidayextras.com>
*/

module.exports = function( grunt ) {

	// project configuration
	grunt.initConfig( {
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			core: {
				src: ['*.js', 'lib/**/*.js']
			}
		},
		jscs: {
			options: {
				config: 'shortbreaks.jscs.json'
			},
			src: ['<%= jshint.core.src %>']
		}
	} );

	// load tasks from the specified grunt plugins...
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jscs' );

	// register task alias'
	grunt.registerTask( 'default', ['jshint', 'jscs'] );

};