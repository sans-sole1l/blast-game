import "webpack-dev-server";

import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import TerserPlugin from "terser-webpack-plugin";
import * as webpack from "webpack";

const isProduction = process.env.NODE_ENV === "production";

const config: webpack.Configuration = {
  stats: "minimal",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 3000,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets/" }],
    }),
  ],
  devtool: isProduction ? undefined : "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5,
          compress: { drop_console: true },
          output: { comments: false, beautify: false },
        },
      }),
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default () => {
  if (isProduction) {
    config.mode = "production";
  }

  return config;
};
