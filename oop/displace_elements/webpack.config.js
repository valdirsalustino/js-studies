const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts',
  },
  devtool: 'cheap-module-source-map',
  // webServer: {
  //   contentBase: './',
  // },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin(),
  ],
};
