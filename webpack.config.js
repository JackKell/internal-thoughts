const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: './index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};
