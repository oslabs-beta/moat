const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './client/index.tsx',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8000,
      hot: true,
      proxy: {},
    },
    module: {
        rules: [
          {
            test: /jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(gif|png|avif|jpe?g)$/,
            type: "asset/resource",
            generator: {
              filename: "[name][ext]",
              publicPath: "assets/images/",
              outputPath: "assets/images/",
            },
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
}