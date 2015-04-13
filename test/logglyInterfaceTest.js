/* jslint node: true */
'use strict';

var chai = require( 'chai' );
var _ = require( 'lodash' );
var should = chai.should();
var sinon = require( 'sinon' );
var https = require( 'https' );
var httpsStub;
var LogglyInterface = require( '../lib/logglyInterface' );
// prime the interface with some dummy connection info
var logglyInterface = new LogglyInterface( loadTestResource( './fixtures/logglyConfig' ) );

function loadTestResource( resource ) {
	return _.cloneDeep( require( resource ) );
}

describe( 'logglyInterface', function() {

	describe( '#log', function() {

		beforeEach( function( done ) {
			httpsStub = sinon.stub( https, 'request', function() {
				return {
					write: function() {},
					end: function() {}
				}
			} );
			done();
		} );

		it( 'should make an https request when the correct arguments are passed in', function( done ) {
			logglyInterface.log( loadTestResource( './fixtures/logOptions' ), loadTestResource( './fixtures/logLog' ) );
			httpsStub.calledWith( loadTestResource( './expected/logResult' ) ).should.be.true;
			done();
		} );

		it( 'should make an http request when log is a string', function( done ) {
			logglyInterface.log(  loadTestResource( './fixtures/logOptions' ), 'test' );
			httpsStub.calledWith( loadTestResource( './expected/logResult' ) ).should.be.true;
			done();
		} );

		it( 'should not make a https request when no log argument is passed', function( done ) {
			logglyInterface.log();
			httpsStub.callCount.should.equal( 0 );
			done();
		} );

		afterEach( function( done ) {
			httpsStub.restore();
			done();
		} );

	} );

} );