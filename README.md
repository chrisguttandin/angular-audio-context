# angular-audio-context

**An Angular wrapper for the Web Audio API's AudioContext.**

[![tests](https://img.shields.io/travis/chrisguttandin/angular-audio-context/master.svg?style=flat-square)](https://travis-ci.org/chrisguttandin/angular-audio-context)
[![dependencies](https://img.shields.io/david/chrisguttandin/angular-audio-context.svg?style=flat-square)](https://www.npmjs.com/package/angular-audio-context)
[![version](https://img.shields.io/npm/v/angular-audio-context.svg?style=flat-square)](https://www.npmjs.com/package/angular-audio-context)

Besides being a wrapper this module also patches the deprecated and prefixed versions of the
AudioContext which are out there. It uses the
[standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context) to do so.

This module can be installed via [npm](https://www.npmjs.com/package/angular-audio-context) like
this:

```shell
npm install angular-audio-context
```

It provides an [Angular Module](https://angular.io/docs/ts/latest/guide/ngmodule.html) that can be
imported into your Angular app as usual.

```typescript
import { AudioContextModule } from 'angular-audio-context';

@NgModule({
    imports: [
        AudioContextModule.forRoot('balanced')
    ]
})
export class AppModule { }
```

The `AudioContext` can then be injected into your components and services.

```typescript
import { Inject, Injectable } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable()
export class AnyService {

    constructor(private _audioContext: AudioContext) { }

}
```

In addition to the `AudioContext`, this module also provides a function called `isSupported` which
returns a promise which either resolves to true or false depending on the currently used browser's
Web Audio API support. An example usage might look like this:

```typescript
import { Component, Inject } from '@angular/core';
import { isSupported } from 'angular-audio-context';

@Component({
    selector: 'any-component',
    template: '<span *ngIf="this.isSupported() | async">Yeah, your browser is supported.</span>'
})
export class AnyComponent {

    constructor(@Inject(isSupported) public isSupported) { }

}
```

In case you are missing a feature or found a bug just fork this repository or raise an issue.
Thanks.

Up to [version 5](https://github.com/chrisguttandin/angular-audio-context/releases/tag/v5.0.0) this
module was compatible with Angular 1.

There is also module called [ngWebAudio](https://github.com/nehz/ngWebAudio) which tries to simplify
the buffering and playback of a single audio file by utilizing the Web Audio API.

The naming of this module tries to align with the recommendations given in the
[Specification for reusable AngularJS components](https://github.com/angular/angular-component-spec).
