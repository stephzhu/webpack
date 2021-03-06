//动态通过webpack命令去自动生成
// npm init 生成package
//npm init 生成package.json文件
//npm install安装


//node获取路径
const path =require('path');
//版权
const webpack=require('webpack');
//将index.htm打包至dist文件夹
const htmlWebpackPlugin=require('html-webpack-plugin');
//文件压缩
const uglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    // output:''
    output:{
        //获取绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        //ulr加上dist路径，解决图片路径问题，让图片打包至dist路径下
        // publicPath:'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    }
                ]
            },
            {
                //limit默认8186，limit大于8字节时切不改变值需下载file-loader
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {

                            limit: 11000000,
                            //打包图片至指定路径、原名
                            //img文件打包的指定文件夹
                            //name获取原来的文件名
                            //hash保证文件名不重复
                            //ext使用图片原来的扩展名
                            name:'img[name].[hash:8].[ext]'
                        },


                    },
                ],
            },
            //es6转化es5
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,   //排除其他js
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                    }
                }
            },
            {
                test: /\.vue$/i,
                use: [
                    {
                        loader: "vue-loader",
                    }
                ]
            },
        ]
    },
    resolve:{
        //不用写扩展名
        extensions:['.css','.js','vue'],
        //寻找合适版本
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:
        [
            //bundle头部添加版权
            // new webpack.BannerPlugins('最终版权归我公司所有'),
            //dist目录生成index.htm
            new htmlWebpackPlugin({
                template:'index.html'
            }),
            new uglifyjsWebpackPlugin()
        ],
    //配置实施监听文件
    devServer:{
        inline:true,
        contentBase:'./dist'
    }
}





