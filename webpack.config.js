const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const postcssPresetEnv = require('postcss-preset-env');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = {
  entry: {
    main: './source/assets/javascripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader ', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  autoprefixer: { grid: true },
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
