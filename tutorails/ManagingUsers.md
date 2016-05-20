# 用户管理

## 概要

Loopback 内建User Model 提供了基础的用户管理:  

- 注册, 通过Email验证
- 登陆,登出
- 创建一个 access token
- 密码重置

> **!important**: 如果你希望创建自己的 User Model ,那么命名不能是 'User', 可以继承 User,然后使用 User 一样的方法

## Creating and authenticating users(创建和认证用户)

创建和认证用户的基础流程:

1. 注册一个新用户 通过 User.create(), 继承PersistedModel object.
2. 用户登陆, 通过 User.login() 获取 token
3. 带着token 来访问 api 接口,

> **!important**: 性能提示, 安装原生的加密模型 `$ npm install --save bcrypt`

## Understanding the built-in User model (理解内建UserModel)

默认情况下,Loopback Application 有一个内建的 User model 通过 user.json(在 loopback 的 framework 中), 不要尝试修改它,可以使用扩展方式去扩展它  

### Default access controls(默认访问权限)
内建user 的访问权限为
```js

{
  "name": "User",
  "properties": {
  ...
  "acls": [
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "DENY"
    },
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW",
      "property": "create"
    },
    {
      "principalType": "ROLE",
      "principalId": "$owner",
      "permission": "ALLOW",
      "property": "deleteById"
    },
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW",
      "property": "login"
    },
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW",
      "property": "logout"
    },
    {
      "principalType": "ROLE",
      "principalId": "$owner",
      "permission": "ALLOW",
      "property": "findById"
    },
    {
      "principalType": "ROLE",
      "principalId": "$owner",
      "permission": "ALLOW",
      "property": "updateAttributes"
    },
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW",
      "property": "confirm"
    },
    {
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW",
      "property": "resetPassword",
      "accessType": "EXECUTE"
    }
  ],
  ...
```


### User realms (用户领域)
