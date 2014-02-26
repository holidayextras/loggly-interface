# Tapestry

The worlds most awesome data loader and aggregator

## Getting Started
To install the module:
```
$ npm install tapestry
```

## Setting up the cache:

Tapestry uses a [Redis](http://redis.io) cache, to get this running locally you can use brew (if you have it installed):
```
$ brew install redis
```
If not, this worked for me on a Mac http://jasdeep.ca/2012/05/installing-redis-on-mac-os-x/, once installed, start the local redis server using:
```
$ redis-server
```

## Documentation

Tapestry takes a configuration object on construction of an instance and can have the following properties.

### Cache

To allow Tapestry to use a cache (either locally or remote) simply pass a connection key in your cache configuration containing the host and the port.  In this below example we are connecting to a local cache using the default port.

```
cache: {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
}
```

### Sources

Sources describe all the submodules you want this instance of Tapestry to talk to (see "Submodules").
```
sources: [
	{
		name: 'tapestry-test'
	}
]
```
Depending on the submodules included you may be required to pass additional configuration, see the package for details.  An example here connecting to the tapestry-exodus module which runs a local mysql database.
```
sources: [
    {
    	name: 'tapestry-exodus',
    	connection: {
    		host: 'localhost',
    		user: 'root',
    		password: 'root',
    		database: 'productLibrary'
    	}
    }
]
```
## Submodules

## Working on Tapestry

### Notes on coding style

Code is linted by ".jshintrc" and checked against the coding style guide "shortbreaks.jscs.json" when you run the default grunt task:
```
$ grunt
```

The following proceedures should also be observed.

Every callback function should be received with the parameter name "callback":
```javascript
var exampleFunction = function( callback ) {}
```
and all callbacks should return an "error" as their first parameter and a "result" as their second:
```javascript
exampleFunction( firstParameter, function( error, result ) {} );
```

### Tests

Tests will run using the default grunt task but can also be called stand-alone using:
```
$ grunt test
```
Note the default tests include accessing a cache.  To run the tests without the cache use:

```
$ grunt testNoCache
```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Shortbreaks  
Licensed under the MIT license.