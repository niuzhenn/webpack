# webpack
webpack配置说明

### 为什么要使用webpack
前端开发，离不开三种文件, .html, .css, .js，曾经做web开发就是写html，再引入css和js文件，这么做本没有问题，但是在web端的要求越来越高的情况下，各个文件越来越臃肿，越来越难以管理，由此催生出了模块化和自动构建。
模块化可以使用RequireJS，SeaJS等，也可以使用ES6；自动构建可以使用Gulp，Grunt，Webpack等；不过现在es6和webpack很火。我们今天来聊聊webpack的基础使用，后续如果有时间可以聊聊进阶。

---

### webpack安装
webpack使用npm进行安装，进行全局安装
```
npm install -g webpack
```
---

### webpack的配置
我们创建一个新项目webpackDemo，在文件夹下创建一个webpack.config.js，这个文件就是webpack的配置文件，他会告诉webpack应该要做什么。

#### webpack的基础配置
webpack的配置文件会暴露出一个对象
```
module.exports = {
    // 配置项
}
```

webpack有4个基础配置：
1.entry: webpack的入口设置
2.output: webpack的出口设置
3.loader: 加载器设置
4.plugin: 插件设置

我们看看这几个基础配置：
1.entry：
entry是模块入口文件设置，打包文件从这里找到打包入口
```
entry: {
    index: './src/main.js'，
    // 可使用数据加载多个模块，但最后只会输出一个page模块
    page: ['./page1.js', './page2.js']
}
```

2.output:
output是打包文件的输出
```
output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
}
```

3.loader:
loader是webpack中使用的插件，明确了每一种文件需要使用什么加载器来进行处理。
在使用插件之前，我们需要先使用npm安装相应的插件，我们以babel-loader和css-loader为例：
```
npm install babel-loader --save-dev
npm install css-loader --save-dev
npm install style-loader --save-dev
npm install url-loader -save-dev
```
执行以上三个命令，我们在本地就安装好了相应的loader，在webpack.config.js文件中，我们就可以使用这些loader对文件进行处理

```
module: {
    rules: [ // webpack4.0使用rules字段，4.0以下使用loaders字段
        {
            // .js文件使用babel-loader进行处理，将es6进行语法转换
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            // .css文件使用style-loader和css-loader进行处理
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            // .scss文件使用使用style-loader，css-loader，sass-loader进行处理
            test: /\.scss$/,
            loader: 'style!css!scss!?sourceMap'
        },
        {
            // 图片使用url-loader进行处理，小于8kb的图片会直接转为base64，减少图片的请求
            test: '/\.{jpg|png|jpeg|gif|svg}$/',
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        }
    ]
}
```
webpack4.0以下loader的加载需要使用loaders字段，webpack4.0使用rules字段，且'-loader'可省略不写，多个loader中间使用!连接起来。


常用loader：
1.babel-loader：es6转换js的loader
2.css-loader：打包css使用的loader
3.ts-loader：打包ts文件使用的loader
4.scss-loader: 打包scss文件使用的loader
5.url-loader: 处理图片使用的loader

### html-webpack-plugin
在插件里额外介绍一个html-webpack-plugin插件，这个插件主要用途：生成index.html文件，并在html文件内插入打包文件的引用。
在使用前，需要先本地安装插件：
```
npm install -g html-webpack-plugin --save-dev
```
本地安装完成后，在webpack.config.js中进行插件配置：
```
plugins:[
    new HtmlWebpackPlugin({
        title: 'Webpack Demo', // html页面title
        filename: __dirname + '/index.html', // html文件存储路径
        template: __dirname + '/src/index.html', // 模板路径
        inject: 'body', // 引用模块的注入位置
        favicon: '', // 页面图标
        hash: true, // 文件尾是否加上hash
        cache: true, // 是否需要缓存，如果写true，文件只在有改变时才重新生成
        showErrors: true, // 是否将错误信息写进页面
        chunks: '', // entry中如果有多个js，在这里表明需要引入的js，默认为空，即全部引入
        chunksSortMode: 'auto', // 引入模块的排序方式
        excludeChunks: '', // 排除的模块
        xhtml: false,
        minify: {
            caseSensitive: false, // 是否大小写敏感
            collapseBooleanAttributes: true, // 是否简写boolean格式
            collapseWhitespace: true // 是否去除空格
        }
    })
]
```

### webpack的运行
webpack的运行很简单，直接在项目根文件夹下命令行中输入：
```
webpack
```
即可使用webpack进行文件打包。
webpack在执行时可使用参数进行带参数打包，例如:
```
// 监听文件变动，并且自动打包
webpack --watch
// 压缩混淆脚本
webpack -p
// 使用webpack.config.dev.js作为打包设置文件进行打包
webpack --config webpack.config.dev.js
```


### webpack-dev-server
webpack-dev-server是webpack内置的一个简易服务器，修改源代码后，页面将会自动刷新。
安装webpack-dev-server
```
npm install -g webpack-dev-server
```
在命令行中使用
```
webpack-dev-server --hot --inline
```
来启动服务器并开启自动刷新，默认端口8080，启动后在浏览器输入 http://localhost:8080 来访问，再启动的过程中，会自动打包文件。

