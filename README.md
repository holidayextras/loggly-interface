# Loggly Interface

[![Circle CI](https://circleci.com/gh/holidayextras/loggly-interface.svg?style=svg&circle-token=dfd8027a148c51e3c7bf211da0c3b8795a653774)](https://circleci.com/gh/holidayextras/loggly-interface)

### About

Module for pushing logs to Loggly

## Getting Started

To install the module:
```
$ npm install git+ssh://git@github.com:holidayextras/loggly-interface.git
```

To run the tests:
```
$ npm test
```

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

## Contributing

Code is linted checked against the style guide with [make-up](https://github.com/holidayextras/make-up), running npm test will run all tests required.

## License
Copyright © 2015 Shortbreaks
Licensed under the MIT license.