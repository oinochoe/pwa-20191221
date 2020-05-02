const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({}),
        new WebpackPwaManifest({
            name: 'Tower Blocks',
            short_name: 'Tower',
            description: 'Tower Blocks Game',
            backgrond_color: '#ffffff',
            crossorigin: 'use-credentials', // 인증 사용하겠다.
            theme_color: '#eeeeee',
            icons: [
                {
                    src: path.resolve('src/assets/game.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                },
            ],
        }),
        new GenerateSW({
            include: [/\.html$/, /\.js$/],
        }),
    ],
};
