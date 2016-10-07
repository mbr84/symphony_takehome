module.exports = {
  entry: './main.js',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  loaders: [
    {
      test: [/\.js?$/], // specifies file types to transpile
      exclude: /(node_modules)/, // leaves dependencies alone
      loader: 'babel', // sets Babel as the transpiler
      query: {
        presets: ['es2015'], // tells Babel what syntaxes to translate
      },
    },
  ],
};
