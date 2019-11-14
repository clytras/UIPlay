const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const minify = require('rollup-plugin-babel-minify'); 

module.exports = {
  input: 'index.js',
  output: [
    {
      file: 'dist/uiplay.js',
      sourcemap: true,
      format: 'iife',
      name: 'UIPlay'
    }
  ],
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    minify({
      comments: false
    })
  ]
};
