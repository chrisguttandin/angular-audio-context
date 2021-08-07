import 'zone.js/testing'; // tslint:disable-line:no-submodule-imports ordered-imports
import { getTestBed } from '@angular/core/testing'; // tslint:disable-line:ordered-imports
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
    context(
        path: string,
        deep?: boolean,
        filter?: RegExp
    ): {
        keys(): string[];

        <T>(id: string): T;
    };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), { teardown: { destroyAfterEach: true } });

// Then we find all the tests.
const context = require.context('../../test/unit', true, /\.ts$/);
// And load the modules.
context.keys().map(context);
