module.exports = {
  mode: 'development', // Add this line to set the mode
  entry: {
    index: './index.ts' // Ensure this points to your TypeScript entry file
  },
  output: {
    filename: '[name].pack.js', // This should match the script tag in your HTML
    path: __dirname + '/dist', // Specify output directory
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to .ts files
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

