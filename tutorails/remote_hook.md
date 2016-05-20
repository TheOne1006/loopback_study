# Remote hooks

- remote 概念
    - 介绍remote hook
    - Signature 识别标志
        - Wildcards 通配符
- Examples
    - Examples of afterRemoteError
- Context object 上下文对象
    - ctx.req.accessToken
    - ctx.result

- 创建remote hook

## remote 概念

### 介绍remote hook

loopback 提供两种类型的钩子:  

1. Remote hooks: 执行 remote 方法 之前/之后 调用的方法, 无论是自定义的 remote 方法,还是标准(内置)的remote 方法。
2. Operation hooks: 操作钩子，在执行 model 的增删改查时触发。

远程钩子，可以前或后一个远程方法是由客户端调用执行的函数:  

- beforeRemote() : 在 remote 方法执行前触发
    - 常用语数据校验
- afterRemote() : 在remote 成功完成之后触发
    - 修改，记录，其他方法 在发送给 client 之前
    -
- afterRemoteError(): 在 remote 执行失败(报错)之后触发


### Signature 识别标志

afterRemote() 和 beforeRemote() 拥有相同的署名  

注释:  
1. methodName: 触发钩子的方法名, 可能是自定义的方法,也可能是  PersistedModel 继承下来的方法。
2. ctx : 上下文对象
3. modelInstance: 对象实例

> 语法

```js
/**
 * 静态的 beforeRemote 方法
 */
modelName.beforeRemote( methodName, function( ctx, next) {
 //
 next();
});

/**
 * 实力 beforeRemote 方法
 */
modelName.beforeRemote( methodName, function( ctx, modelInstance, next) {
 // ...
 next();
});

modelName.afterRemote( methodName, function( ctx, modelInstance, next) {
 // ...
 next();
});

// 没有实例对象的参数
modelName.afterRemoteError( methodName, function( ctx, next) {
 // ...
 next();
});

```

#### Wildcards 通配符

你可使用 通配符 在 methodName 字段:

- 星号`*`匹配任何字符, 直到第一次出现 `.`
- 双星号 `**` 匹配任何字符, 包括 `.`

案例： ??  
`*.*` 匹配静态方法。  
`prototype.*` 匹配实例方法。  




## Context object 上下文对象

remote hooks 提供一个上下文对象，它包含传输方式的数据(HTTP: req and res),   
还拥有一套横跨传输一致的API ？？  

应用使用`loopback.rest()` 中间件的方法为 ctx 对象提供了一下属性:  

- ctx.req: Express Request object
- ctx.result: Express Response object

应用还为 `afterRemoteError()` 额外提供了 `ctx.error` 来报告 于 remote 方法  

其他属性:  

- ctx.args: 包含了http 请求的参数信息。


### ctx.req.accessToken
accessToken: 表示调用方法的用户身份。  

### ctx.result
介于  afterRemote hooks  中间, ctx.result 包含的数据是要发送给 客户端的。
























- - -
