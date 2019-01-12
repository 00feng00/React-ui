var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var fs = require("fs")
var path = require('path')
const babelrc_file = '../../../.babelrc'
fs.writeFileSync("./.babelrc", fs.readFileSync(babelrc_file), "utf-8")

const HtmlWebpackPlugin = require("html-webpack-plugin");

function r_int(Min, Max, length) {
    return parseInt(Math.random() * (Max - Min) + Min);
}

var port = r_int(9000, 9999,)
module.exports = {
    // devtool: "cheap-module-eval-source-map",
    devtool: "source-map",
    mode: "development",
    entry: './index.demo.js',
    output: {
        filename: './demo.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            module: true,
                            sourceMap: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('postcss-smart-import')({skipDuplicates: true}),
                                require("precss")(),
                                require("postcss-nested-import"),
                                require('postcss-functions')({
                                    functions: {
                                        px2rem: function ($px, $fontSize) {
                                            var $fontSize = $fontSize || 100
                                            return ($px / $fontSize / 2) + "rem"
                                        }
                                    }
                                })
                            ]
                        }
                    },
                ],
            },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader", options: {
                            javascriptEnabled: true
                        }
                    },

                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: `http://localhost:${port}`}),
        new HtmlWebpackPlugin({
            template: `../../index.html`,
            //   alwaysWriteToDisk: true
        }),
        new webpack.DefinePlugin({
            IS_COMPONENT: true,
        }),
    ],
    devServer: {
        noInfo: true,
        inline: true,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        port: port,
        host: 'localhost'
    },
}