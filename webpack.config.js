const webpack = require('webpack');
const path = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack-bundle.js',
  },
  devServer: {
    publicPath: '/dist',
    // hot: true
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query:
        // {
        //   presets:['@babel/react', 'es2015']
        // }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}