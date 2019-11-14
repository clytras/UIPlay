module.exports = {
  //entry: './src/index.js',
  entry: './build/web.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/env",
                {
                  targets: {
                    edge: "12",
                    firefox: "60",
                    chrome: "67",
                    safari: "10",
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'uiplay.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
}
