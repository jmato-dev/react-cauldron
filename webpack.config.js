const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function exports(env, argv) {
  return {
    devtool: !env.production && 'eval-source-map',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, `dist/${argv.mode}`),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: env.production
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
            },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
      }),
      env.production &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash:8].css',
        }),
    ].filter(Boolean),
  };
};
