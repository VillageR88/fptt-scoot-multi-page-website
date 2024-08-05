import { resolve as _resolve } from 'node:path';

export const mode = 'development';
export const entry = './app/static/layout.tsx';
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'app/static/dist'),
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  alias: {
    // Add any necessary aliases here
  },
};
export const module = {
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
  ],
};
