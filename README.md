# Tapestry Logger Loggly

A Loggly module for the Tapestry logger

## Getting Started
To install the module:
```
$ npm install git+ssh://git@bitbucket.org/hxshortbreaks/tapestry-exodus.git
```
## Documentation

The following proceedures should also be observed.

Every callback function should be received with the parameter name "callback":
```javascript
var exampleFunction = function( callback ) {}
```
and all callbacks should return an "error" as their first parameter and a "result" as their second:
```javascript
exampleFunction( firstParameter, function( error, result ) {} );
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