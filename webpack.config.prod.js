process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: {
    index: './lib/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'index.js',
    library: 'Hawk',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};
