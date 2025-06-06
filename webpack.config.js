const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    compress: true,
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/'
    }
  }
};