var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // entry: "./src/script/main.js", // 1.string 
    // entry: ["./src/script/main.js","./src/script/a.js"], // 2.array
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js",
        b: "./src/script/b.js",
        c: "./src/script/c.js"
    }, // 3.object
    // 这里应用程序开始执行
    // webpack 开始打包

    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "./dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        // filename: "bundle.js"  // 单个入口
        filename: "js/[name]-[hash].js", // 多个入口
        // 「入口分块(entry chunk)」的文件名模板（出口分块？）

        publicPath: "http://cdn.com/"

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is a.html',
            chunks: ['main', 'a']
        }),
        new HtmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is b.html',
            chunks: ['main','b']
        }),
        new HtmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is c.html',
            chunks: ['c']
        })
    ]
};