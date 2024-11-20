const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');
module.exports = {
  mode:'development',
  entry:'./index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,  
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'public','index.html')
    }),
  ],
  devServer: {
    port: 3000,
    open: true, 
    hot: true, 
  },
};