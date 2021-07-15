import { join } from 'path';

const context = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'npPlaces',
  },
  devtool: 'source-map',
  /* add peer dependency here */
  externals: {},
  module: {
    rules: [
      { test: /\.js$/, include: context },
      { test: /\.json$/, include: context },
    ],
  },
};
