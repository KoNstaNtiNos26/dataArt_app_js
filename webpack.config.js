const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'main.js',
   },
   plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
            }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html"),
            }),
    ],
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                },
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
};