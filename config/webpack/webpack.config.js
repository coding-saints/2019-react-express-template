const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "web/public/index.html", 
  filename: "index.html"
});

module.exports = {
  entry: "./web/index.js",
  output: { 
    path: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
    filename: "[hash].js"
  },
  devServer: {
    publicPath: 'http://localhost:3000/dist/',
    port: 3000,
    historyApiFallback: true,
    open: true,
    overlay: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader']
        // options: {
        //   sourceMap: true,
        //   sourceMapContents: false
        // }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[hash].[ext]' }
      }
    ]
  }
};