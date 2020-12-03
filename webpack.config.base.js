const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ManifestPlugin = require("webpack-manifest-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const env = process.env.APP_ENV;
// const config = require('./conf');

let publicPath = '/';
// if (env !== 'local') {
// if (env === 'dev' || env === 'trunk'||env === 'huidu'||env === 'online') {
//   publicPath = `/${config.systemName}/`
// }

module.exports = {
  entry: path.resolve(__dirname, "src", "app.js"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath,
    chunkFilename: "[chunkhash].async.js",
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".json"] 
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [],
        loader: "babel-loader?cacheDirectory",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?modules", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  externals: {},
  node: {
    fs: "empty",
    module: "empty",
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.(css|less)/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // new OpenBrowserPlugin({ url: "http://a.test360.com:8080/" }),
    new ProgressBarPlugin(),
    // new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
      hash: true,
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "public")
    //   }
    // ]),
    new webpack.HotModuleReplacementPlugin(),
    // new ManifestPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        APP_ENV: JSON.stringify(process.env.APP_ENV),
      },
    }),
  ],
};
