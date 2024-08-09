import { dirname, resolve } from 'node:path';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.mjs';
const __dirname = dirname(__filename);

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: resolve(__dirname, './app/static/dist'),
    // filename: '[name].bundle.js',
    filename: '[name].bundle.js',
  },
};

export default merge(commonConfig, devConfig);
