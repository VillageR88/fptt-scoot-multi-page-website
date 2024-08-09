import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.mjs';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'app/static/dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'globals.css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};

export default merge(commonConfig, prodConfig);
