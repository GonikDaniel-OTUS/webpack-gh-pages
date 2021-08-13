const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    historyApiFallback: true,
  },
  entry: "./src/index.ts",
  mode: "development",
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
