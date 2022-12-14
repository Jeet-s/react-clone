const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let PORT = 3000;

module.exports = {
  entry: "./index.jsx",
  output: {
    filename: "./dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: PORT,
    historyApiFallback: true,
    open: true,
  },
};
