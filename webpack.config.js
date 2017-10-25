const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Preact Starter App",
      favicon: "./favicon.png",
      template: "./template.ejs"
    }),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    })
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "cheap-eval-source-map", // development

  devServer: {
    hot: true,
    port: 9000
  },

  module: {
    rules: [
      { test: /\.js|.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss|.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

module.exports = config;
