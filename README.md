# Loggly Interface

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

### About

An module for pushing logs to Loggly

## Getting Started

To install the module:
```
$ npm install git+ssh://git@bitbucket.org/hxshortbreaks/loggly-interface.git
```

#### EditorConfig

EditorConfig helps us define and maintain consistent coding styles between different editors and IDEs.  If you are using Sublime Editor you can install the `EditorConfig` using [Package Control](https://sublime.wbond.net).

For non Sublime development a bunch of other IDE plugins are available [here](http://editorconfig.org/#download)

## Documentation

## Log style
To try and keep consistency across our systems
type and namespace
query    -> payload
reply    -> payload
request  -> payload
response -> payload
log      -> system
responseTime -> system
system   -> error
thirdPartySystem -> error

## Notes on coding style

Code is linted by ".jshintrc" and checked against the coding style guide "shortbreaks.jscs.json" when you run the default grunt task:
```
$ grunt
```

## License
Copyright (c) 2014 Shortbreaks
Licensed under the MIT license.