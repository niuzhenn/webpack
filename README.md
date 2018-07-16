# webpack
Webpack配置说明

### webpack安装
webpack使用npm进行安装，进行全局安装
```
npm install -g webpack
```

### webpack的配置
我们创建一个新项目webpackDemo，在文件夹下创建一个webpack.config.js，这个文件就是webpack的配置文件，他会告诉webpack应该要做什么。

我们打开webpack.config.js文件，在文件中输入一下内容
```
var webpack = require('webpack');
