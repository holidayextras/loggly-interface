/* eslint no-unused-expressions:0 */
'use strict';

var chai = require( 'chai' );
var _ = require( 'lodash' );
chai.should();
var sinon = require( 'sinon' );
var request = require( 'request' );
var requestPostStub;
var LogglyInterface = require( '../lib/logglyInterface' );

function loadTestResource( resource ) {
  return _.cloneDeep( require( resource ) );
}

// prime the interface with some dummy connection info
var logglyInterface = new LogglyInterface( loadTestResource( './fixtures/logglyConfig' ) );

describe( 'logglyInterface', function() {

  beforeEach( function( done ) {
    requestPostStub = sinon.stub( request, 'post' );
    done();
  } );

  context( '#log', function() {

    it( 'should make an https request when the correct arguments are passed in', function( done ) {
      logglyInterface.log( loadTestResource( './fixtures/logOptions' ), loadTestResource( './fixtures/logLog' ) );
      requestPostStub.calledWith( loadTestResource( './expected/logObjectResult' ) ).should.be.true;
      done();
    } );

    it( 'should make an https request when log is a string', function( done ) {
      logglyInterface.log( loadTestResource( './fixtures/logOptions' ), 'test' );
      requestPostStub.calledWith( loadTestResource( './expected/logStringResult' ) ).should.be.true;
      done();
    } );

    it( 'should not make a https request when no log argument is passed', function( done ) {
      logglyInterface.log();
      requestPostStub.callCount.should.equal( 0 );
      done();
    } );

  } );

  afterEach( function( done ) {
    requestPostStub.restore();
    done();
  } );

} );
