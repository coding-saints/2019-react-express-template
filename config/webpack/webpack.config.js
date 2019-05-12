const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const placeholder = require('')
module.exports = {
    entry: "/web/index.js"
    output: {
        path: path.join  
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '',
            filename: 'index.html'
        })
    ]
  }