const path = require('path')
const HTMLWEBPACK = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    //soucemap mapeamento de todos os arquivos
    devtool:'source-map',
    
   // mode:'production',
    entry :{
        index:'/View/src/index.js'
    },
    output:{
        path:path.resolve('./View/dist'),
        filename:'[name].bundle.js',
    },
      devServer: {
        contentBase: path.join('./View/dist'),
        compress: true,
        port:'7000',
        host:'localhost',
        watchOptions: {
            poll: true
        }
  },
module:{
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader"
            }
        }
    ]
},
plugins:[
    new HTMLWEBPACK({
        template:path.resolve("./view/public/index.html"),
        filename:"./index.html"
    })
]
}
