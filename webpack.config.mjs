import { resolve as _resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  mode: 'development',
  entry: './app/static/pages/layout.tsx',
  output: {
    filename: 'bundle.js',
    path: _resolve(__dirname, 'app/static/dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      // Add any necessary aliases here
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  pragma: 'h', // Preact pragma
                  pragmaFrag: 'Fragment', // Preact Fragment pragma
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    new HtmlWebpackPlugin({
      template: './app/templates/index.html', // Adjust the path to your Flask template
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // devServer: {
  //   contentBase: _resolve(__dirname, 'app/static/dist'),
  //   hot: true,
  //   open: true,
  //   port: 3000, // You can change the port if needed
  // },
};

export default config;
