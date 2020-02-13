const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    apps: './src/index.js',
    print: './src/print.js' 
  },
  plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};