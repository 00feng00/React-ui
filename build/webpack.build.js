var baseConfig = require("./webpack.base.js");
var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var mode = process.env.NODE_ENV,
    devMode = mode !== 'production';
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
console.error(path.resolve(__dirname, "../src/style/customeAntd/custom.less"))
baseConfig.module.rules = baseConfig.module.rules.concat([
    {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: [path.resolve("./src")]
    },
    {
        test: /\.css$/,
        exclude: /customeAntd/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    module: true,
                    sourceMap: false,
                    localIdentName: "[local]_[hash:base64:5]",
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    plugins: [
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
    {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?file-loader?limit=8192&name=../images/[name].[ext]?[hash]',
    }
]);
var plugins = baseConfig.plugins.concat(new Visualizer())
var config = {
    mode: "production",
    externals: baseConfig.externals,
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: plugins,
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
    }
};
config.plugins.push(new MiniCssExtractPlugin({
    filename: 'stylesheets/dingyi.css',
}));
config.plugins.push(
    new HtmlWebpackPlugin({
        template: `./src/index.html`
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        },
        IS_COMPONENT: false,
    })
);

module.exports = config;
