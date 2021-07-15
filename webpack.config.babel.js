import { join } from 'path';

const context = join(__dirname, 'src');

export default {
  context,
  entry: './index',
  mode: 'development',
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
