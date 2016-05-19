## loopback
核心模块, 提供静态属性 和 方法 创建 dataSource 和 models,  
模块本身是个 fuction 可以创建一个 loopback app


### 类属性 Class Properties

1. version 版本号
2. mime
3. isBrowser 是否在浏览器环境中,只读
4. isServer 是否在服务器环境中
5. registry 全局注册对象 ??
6. faviconFile favicon 默认路径

### 静态方法

#### loopback.autoAttach()
自动加载model, 使用默认 dataSource

#### loopback.configureModel(ModelCtor, config)
改变现有 model 的配置

#### loopback.createDataSource(name, options)

创建 datasource 通过 options 配置链接到 connector

1. name {string} 配置名称
2. options {object}
    - connector {object} loopback connector
    - [\*] ??

#### loopback.createModel() 创建一个 model

1. loopback.createModel(name, properties, options)
2. loopback.createModel(config)
3. name {string} model 名字
4. properties {object} 属性
5. options {object} 创建参数


#### looback.findModel(modelName)
通过名字查找 由 createModel 创建出来的mdoel,
返回找到的model

#### loopback.getDefaultDataSourceForType(type)

获取默认 DataSource ??

#### loopback.getModel(modelName)

与looback.findModel(modelName) 类似,如果没找到会抛出一个错误 ？

#### loopback.getModelByType(modelType)

??

#### 








- - - -
