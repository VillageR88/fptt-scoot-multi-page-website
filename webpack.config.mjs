import { resolve as _resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  mode: 'development',
  entry: './app/static/pages/layout.tsx',
  output: {
    filename: 'bundle.js',
    path: _resolve(__dirname, 'app/static/dist'), // Absolute path
    assetModuleFilename: 'images/[hash][ext][query]', // Custom output filename for assets
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
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/templates/index.html', // Adjust the path to your Flask template
      filename: 'index.html', // Output path within the dist directory
      inject: 'body', // Inject scripts at the end of the body
      scriptLoading: 'blocking', // Ensure scripts are loaded in the correct order
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.GITHUB_PAGES': JSON.stringify(true), // Set this to true for GitHub Pages
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    new Dotenv(), // Add Dotenv plugin to load environment variables
  ],
};

export default config;
