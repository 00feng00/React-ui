var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var fs = require("fs")
var path = require('path')
const babelrc_file = '../../.babelrc'
fs.writeFileSync("./.babelrc", fs.readFileSync(babelrc_file), "utf-8")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");

function r_int(Min, Max, length) {
    return parseInt(Math.random() * (Max - Min) + Min);
}

var baseConfig = require("../../build/webpack.base")
var port = r_int(9000, 9999,)
module.exports = {
    externals: {
        ...baseConfig.externals,
        'react': {commonjs: 'react'},
        'react-dom': {commonjs: 'react-dom'}

    },
    mode: "production",
    entry: './index.js',
    output: {
        filename: './reactUI.min.js',
        // library: 'reactUI',
        libraryTarget: 'commonjs',
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
                    MiniCss.loader,
                    // {
                    //     loader: "style-loader"
                    // },
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
                    MiniCss.loader,
                    // {
                    //     loader: "style-loader"
                    // },
                    {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader", options: {
                            javascriptEnabled: true,
                            indentedSyntax: true
                        }
                    },

                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?file-loader?limit=8192&name=../images/[name].[ext]?[hash]',
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: true,
                    chunks: 'all',
                    minChunks: 5,
                }
            }
        },
        minimize: true,
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            }),
            /*css 压缩*/
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCss({filename: "reactUI.min.css"})
    ]
}