//动态通过webpack命令去自动生成
// npm init 生成package
//npm init 生成package.json文件
//npm install安装


//node获取路径
const path =require('path');

module.exports={
    entry:'./src/main.js',
    // output:''
     output:{
        //获取绝对路径
        path:path.resolve(__dirname,'dist'),
         filename:'bundle.js'
     },
}