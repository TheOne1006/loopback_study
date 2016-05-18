## Class: LoopBackApplication

1. 基础案例
2. 静态方法(Static Methods)

### base
```js
var loopback = require('loopback');
var app = loopback();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

1. app 表示loopback 应用
2. 扩展于express, 并且支持 express 的 中间件方法

### 静态方法

1. app.connector(name , connector)
    - 注册一个连接器
    - 项目中的目录: ?
2. app.dataSource(name, config)
    - 定义一个数据源
3. app.enableAuth() 开启?验证
4. app.listen( cb) 监听端口, 回调函数
5. app.model(Model, config) 附加一个模型到 app 应用上
6. app.models(); model list
7. app.remoteObjects() ??
8. app.remotes() ??
9. app.middlewareFromConfig(factory, config) 通过工具方法和config 注册中间件
10. app.defineMiddlewarePhases() 定义时期
11. app.middleware(); 类似express 构造中间件方式

#### `app.connector(name, connector)` 注册连接器

1. 关系: 当一个 dataSource 添加时,需要第一时间创建对应的连接器。
2. 声明: 连接器需要事先声明在应用中,因为不支持动态加载
3. name {string}: 连接器的名字, (eg: 'mysql')
4. connector {object}: Connector object as returned by require('loopback-connector-{name}')

#### app.dataSource(name, config)

1. name {string}: 数据源名称
2. config {object}: 配置文件

### app.enableAuth()

1. 开启宽度认证 ??

### app.listen(prot, cb)
等同于 express

### app.model(Model, config)

1. model object 时需要什么条件属性 ??
2. Model {string/Object} 附加的model
3. config {Object} 相关配置
   - config.dataSource {string/dataSource} 数据源
   - config.public {Boolean} 通过REST 暴漏给 http
   - relations {object} 关系信息 ?
4. Returns ModelConstructor model 构造函数

### app.models() 返回 所有定义了的 model list


### app.remoteObjects()
获取所有remote 对象 ??

### app.remotes(factory, config)
懒加载一个 remote ??


### app.middlewareFromConfig(factory, config)
注册配置中间件

1. factory {function} 工厂方法,通常使用 `require('xxx')` 使用包
2. config {object}
    - config.phase {string} 注入时期
    - config.enabled {boolean} 是否启用, 默认 true
    - config.params {Array} factory 需要参数, 默认 []
    - config.path {Array or string or RegExp} 路径限制了中间件的范围可选列表

### app.defineMiddlewarePhases(nameOrArray)
定义中间件时期

1. 如果是新的那么添加到"routers" 前
2. 否则将并入现有时期 ???

### app.middleware(name, handler)
注册一个中间件在特定的时期

1. name {string} 时期
2. paths {Array or string or RegExp}
3. handler {function}
    - function(req, res, next)
    - function(err, req, res, next)


















- - - -
