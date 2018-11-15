import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';



const sassLoaderConfig = {
  fallback: 'style-loader',
  use: [{ loader: "css-loader", options: { url: false } }, { loader: "sass-loader" }]
};

module.exports = {
  entry: [
   
  ],
  
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['env'] }, exclude: /node_modules/ },
      { test: /\.js$/, loader: 'eslint-loader', query: { presets: ['env'] }, exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(sass|scss)$/, loader: ExtractTextPlugin.extract(sassLoaderConfig), exclude: /node_modules/ },
      { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/i, loader: 'url-loader', options: { limit: 1000, name: "assets/[hash].[ext]" }, exclude: /node_modules/ }
    ]
  },
  stats: { colors: true },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true })
  ],
  devtool: 'source-map'
};
