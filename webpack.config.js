const webpack = require("webpack")
const Uglify = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename:"dist/dist.js"
  },
  mode:"production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins:["transform-async-to-generator"]
          }
        }
        },{
        test: /\.scss$/,
        use:[{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options:{
            minimize:true
          }
        }, {
          loader: "sass-loader" 
        }]
      },{
        test: /\.css$/, use:[{
          loader: "style-loader"
        }, {
          loader: "css-loader" 
        }]
      },{
        test: /\.html$/,
        use: 'vue-template-loader'
      },{
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|m4a)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              outputPath:"dist/assets/"
            }
          }
        ]
      }
    ]
  },
  optimization:{
    minimizer: [
      new Uglify({
        uglifyOptions:{
          mangle:{
            safari10: true,
            reserved:[
              
            ]
          }
        }
      })
    ]
  }
};
