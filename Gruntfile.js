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

  // Project configuration.
  grunt.initConfig( {
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      core: {
        src: ['Gruntfile.js', 'package.json', 'lib/**/*.js']
      }
    },
		jscs: {
			options: {
				config: 'shortbreaks.jscs.json'
			},
			src: ['<%= jshint.core.src %>']
		}
  } );

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jscs-checker' );

  // Default task.
  grunt.registerTask( 'default', ['jshint', 'jscs'] );

};