import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      name: 'pure',
      file: 'dist/pure-object.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      name: 'pure',
      file: 'dist/pure-object.min.js',
      format: 'umd'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  }
];
