module.exports = {
  entry: './src/index.js',
  output: {
    filename:'bundle.js',
    path: __dirname
  },
  module:{
    rules:[
      {
        test: /.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true
  }
}
