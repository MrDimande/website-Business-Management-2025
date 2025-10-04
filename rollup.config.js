// import minify from 'rollup-plugin-babel-minify';
// import resolve from 'rollup-plugin-node-resolve';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

// ..

plugins: [nodeResolve(), terser()]
// ...