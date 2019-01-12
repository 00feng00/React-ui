var webpack = require("webpack");
var path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractLess = new ExtractTextPlugin("stylesheets/antd.css");
let extractCss = new ExtractTextPlugin("stylesheets/dingyi.css");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const argv = require("yargs").argv;
console.log("mode===>" + process.env.NODE_ENV);
console.log("--DEV_MODAL==>", argv.devmodal);
console.log(__dirname);
var dev_mode = "'/api'";
if (process.env.NODE_ENV == "production") {
    dev_mode = "'/api'";
}
if (process.env.NODE_ENV == "dev") {
    dev_mode = "'/api'";
}
if (process.env.NODE_ENV == "mock") {
    dev_mode = "'/mock'";
}
const config = {
    extractLess,
    extractCss,
    entry: {
        index: path.resolve("./src/app.js")
    },
    resolve: {},
    externals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        redux: "Redux",
        echarts: "echarts",
        konva: "Konva",
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_' // indicates global variable
        },
        axios: "axios",
        mockjs: "mockjs"
    },
    output: {
        path: path.resolve("./dist/"),
        filename: "[name]/[name].js",
        // 添加 chunkFilename
        chunkFilename: "[name].[chunkhash:5].chunk.js"
    },
    resolve: {
        extensions: [".js", ".tsx", ".jsx", ".json", ".css"],
        alias: {}
    },
    module: {
        rules: []
    },
    plugins: [
        new OpenBrowserPlugin({url: `http://localhost:${require("./constants").port}`}),
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve("./"),
            exclude: ["static", "favicon.png", "index.html", "dll", "server.js", "package.json"],
            verbose: true,
            dry: false
        }),
        new webpack.DefinePlugin({
            NODE_ENV: "'" + process.env.NODE_ENV + "'",
            IS_COMPONENT: false,
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/, /antd$/),
    ]
};


module.exports = config;
