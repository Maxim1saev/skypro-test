import path from 'path';
import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const target = isDev ? 'web' : 'browserslist';
  const devtool = isDev ? 'inline-source-map' : undefined;

  const devServer: DevServerConfiguration = isDev
    ? {
        port: 3000,
        open: true,
        hot: true
      }
    : undefined;

  const config: webpack.Configuration = {
    mode,
    target,
    devtool,
    devServer,
    entry: {
      index: path.resolve(__dirname, 'src', 'index.ts'),
      basket: path.resolve(__dirname, 'src', 'basket.ts')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'basket.html',
        template: './src/basket.html',
        chunks: ['basket']
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'img'),
            to: path.resolve(__dirname, 'dist', 'assets')
          }
        ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, './postcss.config.js')
                }
              }
            },
            {
              loader: 'resolve-url-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.woff2?$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset/resource',
          use: isDev
            ? []
            : [
                {
                  loader: 'image-webpack-loader',
                  options: {
                    optipng: {
                      enabled: false
                    },
                    pngquant: {
                      quality: [0.65, 0.9],
                      speed: 4
                    },
                    webp: {
                      quality: 75
                    }
                  }
                }
              ]
        },
        {
          test: /\.m?js$/i,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    }
  };

  return config;
};

interface BuildEnv {
  mode: webpack.Configuration['mode'];
}
