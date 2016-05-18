## Class Model
基础Model

#### Base Model

```js
var properties = {...};
var options = {...};
var MyModel = loopback.Model.extend('MyModel', properties, options);
```
> event 事件

1. changed : 触发机会 成功创建,保存,更新
  - 参数`function (inst)`
  - inst: model, 实例, 对象
2. deleted : 成功删除,
  - 参数 : id
3. deletedAll: 删除所有
4. attached
  - 当 model 附属到 app
5. dataSourceAttached
  - model 附属到 datasource
6. set
  - model 属性设置时触发

> Properties 属性

1. Model.modelName {string} model 名,静态属性
2. Model.dataSource {DataSource} 附属到那个 dataSource
3. Model.sharedMethod {SharedClass} 暴露到 http 的方法
4. settings {Object} 设置
5. settings.http.path {string} 基础url

> Static Methods 静态方法

1. Model.checkAccess(token, modelId, sharedMethod, ctx, callback)
  - 检查是否给定的访问令牌可以调用指定的方法
  - token: AccessToken 访问 token
  - modeId : model id
  - sharedMethod: ???
  - ctx : 访问上下文
  - callback: 回调函数
    1. 回调参数: callback(err, allowed)
    2. allowed {boolean}:True如果请求被允许; 否则为false。
2. Model.disableRemoteMethod(name, isStatic)
  - 禁用远程调用与给定名称的方法
  - name{string} 方法名
  - isStatic{boolean} 是否为静态方法
3. Model.getApp(callback(err, application){})
  - 获取应用到模型连接对象
  - application: 附加应用程序对象。
4. Model.nestRemoting(relationName, [options], pathName, filterMethod, paramName, getterName, hooks, filterCallback)
  - ??
5. Model.remoteMethod(name, options)
  - 启用指定的方法远程调用.
  - name {string}: 方法名
  - options {object}: 暴露参数
























- - - -
