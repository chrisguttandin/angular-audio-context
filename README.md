# angular-audio-context

**An AngularJS wrapper for the Web Audio API's AudioContext.**

[![tests](https://img.shields.io/travis/chrisguttandin/angular-audio-context/master.svg?style=flat-square)](https://travis-ci.org/chrisguttandin/angular-audio-context)
[![dependencies](https://img.shields.io/david/chrisguttandin/angular-audio-context.svg?style=flat-square)](https://www.npmjs.com/package/angular-audio-context)
[![version](https://img.shields.io/npm/v/angular-audio-context.svg?style=flat-square)](https://www.npmjs.com/package/angular-audio-context)

Besides being a wrapper this module also patches the deprecated and prefixed versions of the
AudioContext which are out there. It uses the
[standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context) to do so.

This module is intended to be used with [Browserify](http://browserify.org/) like this:

```js
var audioContext = require('angular-audio-context');

angular
  .module('my-app', [audioContext.name])
  .controller('ExampleCtrl', ['audioContextService', function (audioContextService) {

    // do something with the audioContextService instance ...

  }]);
```

In addition to the audioContextService, which is essentially an instantiated AudioContext, this
module also provides another service called audioContextSupportService which only has one method
called `isSupported()`. It returns a promise which resolves to a boolean that indicates if the
currently used browser supports the Web Audio API's AudioContext or not. An example usage might look
like this:

```js
var audioContext = require('angular-audio-context');

angular
  .module('my-app', [audioContext.name])
  .controller('ExampleCtrl', ['audioContextSupportService', function (audioContextSupportService) {

    this.isSupported = false;

    audioContextSupportService
      .isSupported()
      .then((isSupported) => this.isSupported = isSupported);

  }]);
```

```html
<div ng-controller="YourController as ctrl" ng-if="!ctrl.audioContextIsSupported">
    <span>Sorry AudioContext is not supported.</span>
</div>
```

In case you are missing a feature or found a bug just fork this repository or raise an issue.
Thanks.

There is also module called [ngWebAudio](https://github.com/nehz/ngWebAudio) which tries to simplify
the buffering and playback of a single audio file by utilizing the Web Audio API.

The naming of this module tries to align with the recommendations given in the
[Specification for reusable AngularJS components](https://github.com/angular/angular-component-spec).
