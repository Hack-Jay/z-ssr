# z-ssr

从零搭建系列 - ssr

# 热更新流程

之前的开发流程：
1. 监听服务端代码，有文件更改就用nodemon重启服务 dev:build:server
2. 监听客户端代码，每次客户端代码变动就重新打包 dev:build:client
构建完成之后重新刷新浏览器得到最新结果

加入热更新：
1. 使用webpack dev server模块热重载，开启一个websocket，当文件变动时会更新到内存，性能得到提升，
webpack 主要配置
    publicPath: 'http://localhost:9000/' 设置路径前缀，和output的一样
    headers: { 'Access-Control-Allow-Origin': '*'}  设置访问资源时跨域问题


2. 修改服务器文件模板的引入  
```
 <script type="text/javascript" src="//localhost:9000/index.js"></script>
```
   