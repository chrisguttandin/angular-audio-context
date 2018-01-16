import 'zone.js/dist/zone-testing'; // tslint:disable-line:ordered-imports
import { getTestBed } from '@angular/core/testing'; // tslint:disable-line:ordered-imports
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare var require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('../../test/unit', true, /\.ts$/);
// And load the modules.
context.keys().map(context);
