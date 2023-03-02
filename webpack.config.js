const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
  plugins:[
    new  HtmlWebpackPlugin({
        title: 'My Webpack Project',
        template: './src/index.html'
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