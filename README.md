# webpack
webpack配置说明

### 为什么要使用webpack
前端开发，离不开三种文件, .html, .css, .js，曾经做web开发就是写html，再引入css和js文件，这么做本没有问题，但是在web端的要求越来越高的情况下，各个文件越来越臃肿，越来越难以管理，由此催生出了模块化和自动构建。
模块化可以使用RequireJS，SeaJS等，也可以使用ES6；
自动构建可以使用Gulp，Grunt，Webpack等；不过现在es6和webpack大火。
我们今天来聊聊webpack的基础使用，后续如果有时间可以聊聊进阶。

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
使用上面的代码
webpack有4个基础配置：

1.entry: webpack的入口设置
2.output: webpack的出口设置
3.loader: 加载器设置
4.plugin: 插件设置

我们看看这几个基础配置：
1.entry：
entry是模块入口文件设置
```
entry: {
    index: './src/main.js'
}
```
2.output:
output是打包文件的输出
```
output: {
    path: path.join(__dirname, 'dist'),
    filename: './bunld.js',
}
```
3.loader:
loader是
```

```
