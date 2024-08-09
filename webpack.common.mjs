import HtmlWebpackPlugin from 'html-webpack-plugin';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const commonConfig = {
  entry: './app/static/pages/layout.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'app/static/dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
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
                  pragma: 'h',
                  pragmaFrag: 'Fragment',
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
      template: './app/templates/index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  // devServer: {
  //     static: {
  //         directory: resolve(__dirname, 'app/static/dist'),
  //     },
  //     compress: true,
  //     port: 9000,
  // },
};

export default commonConfig;
