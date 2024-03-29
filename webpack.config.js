const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const child_process = require("child_process");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    alias: { "@": path.resolve(__dirname, "./src/") },
  },
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  devServer: {
    client: {
      overlay: true,
    },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
    }),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `
            BuildDate: ${new Date().toLocaleString()}
            NodeVersion: ${child_process.execSync("node --version")}
            Author: ${child_process.execSync("git config user.name")}
        `,
    }),
    new Dotenv(),
    ...(process.env.NODE_ENV === "production"
      ? [new BundleAnalyzerPlugin()]
      : [new ReactRefreshPlugin()]),
  ],
};
