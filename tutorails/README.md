## loopback 教程和案例

参考网址: <https://docs.strongloop.com/display/public/LB/Tutorials+and+examples>  

### demo


### 相关lib
[loopback-boot](https://github.com/strongloop/loopback-boot):启动初始化 loopback 程序

1. 配置 dataSource
2. 定义常用model
3. 配置model, 并把model 附属到 dataSource 上
4. 提供 appliction 配置
5. 启动 boot 脚本


#### boot(app, [options], [callback])

1. app: 一个由 `loopback()` 创建的app
2. options: {string, object} string 代表项目根路径





#### Working with LoopBack objects (loopback 对象的使用)

主要的loopback 对象有:  

1. App object
2. Models
3. Data sources

如何获得这些对象的引用。

> Getting the app object 获取app 对象

十分重要的对象，可以通过它来获取 models, 或者 dataSource, 通常你会想要得到的应用对象在一个句柄：

1. Model scripts: /common/models/modelName.js (获取model通过modelName).
2. Boot scripts in /server/boot (启动脚本)
3. Middleware (部分中间件)
4. 自定义脚本

这些部分都有方法获取到 app 对象

>> boot script

```js
// app is injected by LoopBack
// 异步方法
module.exports = function(app, cb) {
};

// 同步方法, without callback
module.exports = function(app) {

};

```

>> middleware 中间件

```js
app.use(function(req, res, next) {
  var app = req.app;
});
```

>> custom script 自定义脚本

```js
var app = require('/server/server');
```

>> model script

module.exports = function(Book) {
    Book.app... //这个app对象是没有启动项，引导完成的对象

};

> Working with model objects 如何获取 model 对象

1. 通过 app 对象: `app.model.Book`

> Working with data source objects 如何获取 dataSource

1. 通过 app 对象: `var datasource = app.datasources.db;`

- - - -
