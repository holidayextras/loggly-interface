# Loggly Interface

[![Build Status](https://api.shippable.com/projects/55269c515ab6cc1352bde8f9/badge?branchName=master)](https://app.shippable.com/projects/55269c515ab6cc1352bde8f9/builds/latest)

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