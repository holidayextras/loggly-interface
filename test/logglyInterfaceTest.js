/* eslint no-unused-expressions:0 */
'use strict';

var chai = require( 'chai' );
var _ = require( 'lodash' );
var expect = chai.expect;
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
      expect( requestPostStub.calledWith( loadTestResource( './expected/logObjectResult' ) ) ).to.be.true;
      done();
    } );

    it( 'should make an https request when log is a string', function( done ) {
      logglyInterface.log( loadTestResource( './fixtures/logOptions' ), 'test' );
      expect( requestPostStub.calledWith( loadTestResource( './expected/logStringResult' ) ) ).to.be.true;
      done();
    } );

    it( 'should not make a https request when no log argument is passed', function( done ) {
      logglyInterface.log();
      expect( requestPostStub.callCount ).to.equal( 0 );
      done();
    } );

  } );

  afterEach( function( done ) {
    requestPostStub.restore();
    done();
  } );

} );
