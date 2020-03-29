# z-ssr

从零搭建系列 - ssr

# 热更新流程

之前的开发流程：

1. 监听服务端代码，有文件更改就用 nodemon 重启服务 dev:build:server
2. 监听客户端代码，每次客户端代码变动就重新打包 dev:build:client
   构建完成之后重新刷新浏览器得到最新结果

加入热更新：

1. 使用 webpack dev server 模块热重载，开启一个 websocket，当文件变动时会更新到内存，性能得到提升，
   webpack 主要配置
   publicPath: 'http://localhost:9000/' 设置路径前缀，和 output 的一样
   headers: { 'Access-Control-Allow-Origin': '\*'} 设置访问资源时跨域问题

2) 修改服务器文件模板的引入

```
 <script type="text/javascript" src="//localhost:9000/index.js"></script>
```

# 小结

现在一共是启动了 3 个服务：

1. 客户端的监听服务，就是刚刚配置的 wds 服务，提供热更新的资源和访问服务
2. 服务端的代码监听，服务端引用的文件改变时重启 nodemon 服务
3. server 服务，提供 react ssr 渲染

这样子的话，组件的代码改动，会引起客户端的热更新，客户端的热更新会改变热替换服务端引用的静态资源，服务端监听也会重启服务，拿到的都是最新的资源，实现双端的热更新
