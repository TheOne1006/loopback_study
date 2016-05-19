## loopback

GITHUB:  <https://github.com/strongloop/loopback/>
文档: <http://apidocs.strongloop.com/loopback/>

Tutorials and examples: <https://docs.strongloop.com/display/public/LB/Tutorials+and+examples>


### 知识点

1. loopback 与 express 的关系?
    - __Express 是内核__:
    - 不应该直接用于商业项目
    - 粒度太小
    - 使用者需要 handle 太多细节, cookie, bodyparse
    - __loopback 是工具__:
    - 粒度合适
2. loopback是 MVC 框架,包含哪些部分?
    - 模型系统
      1. PersistentModel (持续性 Model)
      2. 鼓励使用者大部分商用逻辑写于模型中完成
    - 控制器
      1. remote methods(远程方法): 把模型系统转换成 http 接口
      2. remote hooks: 两个hooks, 一个 request 到 model , 一个 model 到 response,
    - 视图 (沿用express 视图)
    - loopback 组件
      1. 组件基于 MVC , 已打包
      2. passport
      3. storage
3. 源码架构

4. strongloop工具
5. 使用explorer 与 swagger


### core concepts 核心概念

__!important 理解 loopback 是如何工作的__  

1. Models
2. Application logic
3. Data sources and connectors
4. LoopBack components

#### Models

> Model 是 loopback 的心脏,代表后端数据源，如数据库或其他后端服务。  

loopback的model 用js的 object 方式表示。  

loopback 能够通过配置,帮你定义一些model相关的增删改查并暴漏到 rest 层  

Basic model object(基础model对象), 能够添加 hooks 去验证数据。
而其他的model 都会继承与它.  

当你把一个model attach(附属) 到 dataSource 上, 它会变成一个 connected model(连接model),并赋予 创建，取回，更新和删除的操作  

loopback 的 built-in models 就是继承与它  


继承关系如下图:

![Model inheritance ](https://docs.strongloop.com/download/attachments/9634357/Model%20inheritance.png?version=1&modificationDate=1456428606000&api=v2)

字符图
```
```

> __Built-in models__

LoopBack应用都内置了一些 built-in model如

1. User
2. Role
3. Application
4. ACL
5.
6.

> Custom models(自定义model)

你可以在你的appliction 中自定义model,也可以扩展 built-in model ( User, Application,... )实现你想要的功能.  
可以通过以下几个方法创建 LoopBack models, 根据使用哪种 dataSource

1. 使用loopback 的 model 手脚架 (`$slc loopback:model`)
2. 从现有的数据库关系中,
3. By instance introspection ??

以上三种方法都会都会创建一个 model相关的json文件( Model definition JSON file),用于定义模型在的使用。目录为`common/models`  

你也可以创建各种model 方法，或者手动编辑json 文件  

有一个 `"idInjection": false,`  // 表示是否有主键设置  

Model relations:表示model 的依赖关系,例如  BelongsTo, HasMany, and HasAndBelongsToMany.  

在model 连接到一个 dataSource 会变成一个 `connected model`, 又有 create, read, update, and delete 操作来自 `Class:PersistedModel`  


#### Application logic 应用逻辑

通过以下几个方式添加逻辑代码:  

1. 通过remote methods (custom REST endpoints), 在 remote hooks 触发的函中,以及 model 的触发hooks 中,如 `create, save, delete`
2. 添加boot scripts 在应用开始执行时
3. 类似于 express 一样定义中间件

> Middleware phases 中间件阶段

中间件根据 HTTP 请求到 REST 不同的执行阶段划分, 基于 Express,  

1. loopback 的中间件也可以像 Express 那样使用  
2. loopback 对中间件引入了 `phases`(阶段)的概念,明确的定义了触发顺序  
3. 作用避免了,执行顺序错误导致的问题


#### Data sources and connectors(数据源与连接器)

loopback 包括后端服务,像一个数据库。像存储服务一样的使用。  
数据源通过连接器，然后直接与数据库或其他后端服务进行通信的支持  
使得应用不用在意连接器信息，


![Data sources and connectors ](https://docs.strongloop.com/download/attachments/9634166/Data%20sources%20and%20connectors.png?version=1&modificationDate=1456428540000&api=v2)



#### LoopBack components(组件)

loopback 提供一些而外的扩展功能:  

1. Push notifications : 推送服务, mobile 系列
2. Storage service: 存储服务,上传下载文件,从云端供应商获取文件如同本地
3. Third-party login: 第三方登陆, 集成 passport ,从而允许用户使用第三方账号登陆
4. Synchronization: 同步, mobile 操作同步
5. OAuth 2.0: 使得服务器能够提供 oauth2 服务





- - -



### 目录结构

```

|- client/ 客户端相关
|- common/ 公共的
|  |- models/ 模型信息
|  |- xxx.js  模型方法，暴漏方式
|  |- xxx.json 模型相关的权限验证, 配置信息
|
|- server/ 服务相关文件
|  |- boot/*.js 启动加载文件
|  |- component-config.json 组件配置
|  |- config.json
|  |- datasources.json 连接器，数据源配置
|  |- middleware.json   中间件配置
|  |- model-config.json 模型设置
|  |- server.js 启动文件
|- self/ 个人学习
|
|- .* yeoman 生成
```


### 数据模型与数据源

1. 创建数据模型(model)
  - `$slc loopback:model`
2. 继承模型
  - `base = User`
3. 继承内建User实现通用用户系统功能
4. 理解数据源(datasource)并配置模型
  - 从类型到模型
  - 从数据源到用户(持久化)
  - 配置 NODE_ENV
    1. datasources.local.json
    2. datasources.staging.json
    3. datasources.production.json
    4. 优先使用 datasources.json 再加载 env 指定的配置

### 中间件配置 middleware.json
基本demo
```js
{
  // 触发时机: 初始化前
  "initial:before": {
    /**
     * 申明使用 loopback 的 middeware favicon
     * <root>/node_modules/loopback/server/middleware/favicon.js
     * 并且不适用任何参数
     */
    "loopback#favicon": {}
  },
  "initial": {
    "compression": {}
  },
  "session": {
  },
  "auth": {
  },
  "parse": {
  },
  "routes": {
     // rest 移除 /api 是在哪一步完成的
     "loopback#rest": {
      "paths": ["${restApiRoot}"]
    }
  },
  "files": {
    "loopback#static": {
      "params": "$!../client"
    }
  },
  "final": {
    "loopback#urlNotFound": {}
  },
  "final:after": {
    "errorhandler": {}
  }
}
```







### 用户登录

1. `$slc loopback:model`
2. 选择继承`User`
3. 在 `models/*.js` 中编写 函数方法,暴露方法
4. 配置 `acl(权限控制)`
5. 配置 `server/model-config.json`
    - AccessToken, ACL ,RoleMapping, Role 对应的数据源
6. 增加 mongodb 数据源 `$slc loopback:datasource`
7. 配置 模型使用连接器 `server/model-config.json`

> acl 配置案例
```js
{
  "principalType" : "ROLE", // 权限
  "principalId": "$everyone", // 所有人
  "permission": "ALLOW", // 允许
  "property": "sayHi" // 方法为 sayHi
}
```



- - - -
