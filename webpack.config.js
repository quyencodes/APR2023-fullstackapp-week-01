import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'web',
  // Signifies entry point of the application (default: src/index.js)
  entry: path.resolve(process.cwd(), 'src/index.jsx'),
  output: {
    // Cwd is a method of the global object process, returns a string value which is the current working directory of the Node.js process.
    // https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname
    path: path.resolve(process.cwd(), 'dist'),
    // filename default is main.js
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        // The test property identifies which file or files should be transformed.
        // https://stackoverflow.com/questions/57924348/you-may-need-an-appropriate-loader-to-handle-this-file-type-currently-no-loader
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        // The use property indicates which loader should be used to do the transforming.
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              transform: {
                react: { runtime: 'automatic' },
              },
              parser: { jsx: true },
            },
          },
        },
      },
      // https://webpack.js.org/loaders/css-loader/
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // https://v4.webpack.js.org/loaders/file-loader/
      // file-loader is a loader used mainly for supporting images such as SVG and PNG, and fonts in your webpack project
      {
        test: /\.(png|svg|jpg|jpeg|gif|)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    // https://www.npmjs.com/package/mini-css-extract-plugin
    new MiniCssExtractPlugin(),
  ],
}
