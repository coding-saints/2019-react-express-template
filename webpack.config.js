const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "web/public/index.html", 
  filename: "index.html"
});

module.exports = {
  entry: "./web/index.js",
  output: { 
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "[hash].js"
  },
  plugins: [htmlPlugin],
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