import webpack from 'webpack';
import path from 'path';
import Generator from './src/Generator';

if (!Generator.identifier) {
  throw new Error('Generator requires on identifier');
}

const name = Generator.identifier.split('.').slice(-1);

const production = process.env.NODE_ENV === 'production';

const config = {
  target: 'node-webkit',
  entry: [
    './src/Generator.js'
  ],
  output: {
    path: path.join(__dirname, './dist/' + Generator.identifier),
    publicPath: '/dist/',
    filename: name + '.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
