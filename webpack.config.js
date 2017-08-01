var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], use: [{loader: 'ng-annotate-loader'}, {loader: 'babel-loader'}] },
       { test: /\.html$/, use: [{loader: 'raw-loader'}] },
       { test: /\.(scss|sass)$/, use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {url: true}}, {loader: 'sass-loader', options: {url: true}}] },
       { test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {url: true}}] },
       { test: /\.json$/, use: [{loader: 'json-loader'}] },
       { test: /\.(jpg|png|gif|svg)$/, use: [{loader: 'file-loader', options: {name: '[path][name].[ext]'}}] },
       { test: /\.(eot|otf|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'file-loader', options: {name: 'fonts/[name].[ext]'}}] }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
