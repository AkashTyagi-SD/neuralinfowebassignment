const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    const isEnvProduction = !!env && env.production;
    console.log('Production: ', isEnvProduction);
    return {
        devtool: 'cheap-module-eval-source-map',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss|less|css)$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                            loader: 'less-loader', // compiles Less to CSS
                            options: {
                                javascriptEnabled: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            mainFiles: ['index', 'Index'],
            extensions: ['*', '.js', '.jsx'],
        },
        plugins: [
            new webpack.NormalModuleReplacementPlugin(/node_modules\/antd\/lib\/style\/index\.less/, path.resolve(__dirname, 'src/index.less')),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        inject: true,
                        template: path.resolve(__dirname, 'public/index.html'),
                    }
                )
            ),
        ],
        devServer: {
            contentBase: './dist',
            hot: true,
            host: '0.0.0.0',
            historyApiFallback: true,
        },
    };
};
