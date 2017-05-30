const path = require("path");
const webpack = require("webpack");

module.exports = {

    entry: {
        script: path.resolve(__dirname, "./entry.js")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            },
            {
                test: /\.js?$/, // both .js and .jsx
                loader: 'eslint-loader',
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/

            }
        ]
    },

    output: {
        path: "./dist",
        filename: "script.js",
        pathinfo: true
    },

    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "./node_modules")
        ]
    }

};
