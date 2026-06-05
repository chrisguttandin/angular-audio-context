import config from 'eslint-config-holy-grail';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

// eslint-disable-next-line import/no-default-export
export default defineConfig([
    {
        extends: [config],
        languageOptions: { globals: { ...globals.browser, expect: 'readonly' } },
        rules: { 'no-unused-expressions': 'off', 'node/file-extension-in-import': 'off', 'node/no-missing-require': 'off' }
    },
    {
        files: ['**/*.ts'],
        rules: {
            'check-file/filename-naming-convention': ['error', { '**/*.ts': 'KEBAB_CASE' }, { ignoreMiddleExtensions: true }],
            'import/no-internal-modules': 'off',
            'rxjs/suffix-subjects': 'off'
        }
    }
]);
