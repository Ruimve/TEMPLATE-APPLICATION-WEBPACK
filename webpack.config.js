const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true
  },
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test:/\.(css|scss)/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new webpack.CleanPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].[contenthash:8].css'
    })
  ]
}