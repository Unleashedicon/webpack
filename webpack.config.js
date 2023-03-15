const { library } = require('@fortawesome/fontawesome-svg-core');
const { fas } = require('@fortawesome/free-solid-svg-icons');

library.add(fas);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development'
  entry: './src/index.js',
  output: {
    filename: '[name].main.js'
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Webpack Project',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['./'],
    port: 8080,
  },
};
