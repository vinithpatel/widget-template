const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: ["./src/lib/widget-starter.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /src\/static/],
                query: {
                    presets: ["@babel/env"]
                }
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: "./src/index.html", to: "./index.html" },
            { from: "./src/static", to: "static", ignore: ["*.md"] }
        ]),
        new VueLoaderPlugin()
    ]
};
