const path = require("path");
const webpack = require("webpack");


module.exports = {
  entry: './index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    port: 3100,
    publicPath: "http://localhost:3100/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};