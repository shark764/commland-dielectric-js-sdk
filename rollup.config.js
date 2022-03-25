import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const input = ['src/index.ts'];
const pkgName = pkg.name.split('/')[1].replace(/^@.*\//, '');
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${pkgName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default [
  {
    // UMD
    input,
    output: {
      // file: `lib/${pkgName}.min.js`,
      file: pkg.main,
      format: 'umd',
      name: 'commlandMobile', // this is the name of the global object
      esModule: false,
      exports: 'named',
      sourcemap: true,
      inlineDynamicImports: true,
      banner,
    },
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
      }),
      terser(),
      commonjs({
        include: 'node_modules/**',
        exclude: '**/*.css',
        extensions: ['.js', '.ts'],
      }),
      typescript(),
    ],
  },
  // ESM and CJS
  {
    input,
    output: [
      {
        dir: 'lib/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        banner,
      },
      {
        dir: 'lib/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        banner,
      },
    ],
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'bundled',
      }),
      commonjs({
        extensions: ['.js', '.ts'],
      }),
      typescript(),
    ],
    external: [
      '@capacitor/core',
      '@capacitor/browser',
      '@capacitor/geolocation',
    ],
  },
];
