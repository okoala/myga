import typescript from '@rollup/plugin-typescript';

const plugins = [typescript()];

export default [
  {
    plugins,
    input: 'scripts/reload/initReloadServer.ts',
    output: {
      file: 'scripts/reload/initReloadServer.js',
    },
    external: ['ws', 'chokidar', 'timers'],
  },
  {
    plugins,
    input: 'scripts/reload/injections/script.ts',
    output: {
      file: 'scripts/reload/injections/script.js',
    },
  },
  {
    plugins,
    input: 'scripts/reload/injections/view.ts',
    output: {
      file: 'scripts/reload/injections/view.js',
    },
  },
];
