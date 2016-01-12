testem-requirejs-mocha-sample [![Build Status](https://travis-ci.org/teppeis/testem-requirejs-mocha-sample.png?branch=master)](https://travis-ci.org/teppeis/testem-requirejs-mocha-sample)
====

Sample project for:

* [Testem](https://github.com/airportyh/testem)
* [RequireJS](http://requirejs.org/)
* [Mocha](http://visionmedia.github.io/mocha/) with [expect.js](https://github.com/LearnBoost/expect.js/)
* [Travis CI](https://travis-ci.org/teppeis/testem-requirejs-mocha-sample) (PhantomJS and Firefox on Xvfb)

# How to run tests

```console
$ git clone git@github.com:teppeis/testem-requirejs-mocha-sample.git
$ cd testem-requirejs-mocha-sample
$ bower install
$ npm install
$ npm test
```

then testem runs sample tests with Firefox and PhantomJS.
