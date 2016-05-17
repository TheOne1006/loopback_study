## loopback

GITHUB:  <https://github.com/strongloop/loopback/>
文档: <http://apidocs.strongloop.com/loopback/>

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

### 用户登录

1. `$ slc loopback:model`
2. 选择继承`User`
3. 在 `models/*.js` 中编写 函数方法,暴露方法
4. 配置 `acl(权限控制)`




- - - -