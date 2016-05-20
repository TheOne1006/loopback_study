## 目标
- 在 loopback-getting-started 基础之上深入
- 可以学到
    1. 在单一应用程序中使用多个数据源
    2. 模型之间的关系
    3. 使用访问控制列表来保护REST端点
    4. 用户注册和认证
    5. 使用AngularJS SDK

### Coffee Shop Reviews(coffee 商店评论)
该 app 拥有两种不同的 数据源, coffce shop 存在 MySql 中, 评论用户,和评论内容 存在 mongodb 中.  

### 3种中Model

1. CoffeeShop 在之前定义过
2. Review  评论内容
3. Reviewer 评论用户

### 过程

1. 可以有多条评论
2. 可以有多个评论者
3. 评论属于某个咖啡店
4. 评论属于某个评论者
5. 评论者可以有多条评论


> 步骤一

克隆复制 上一课时的代码  

> 步骤二

新增 数据源 `$slc loopbacn:model`  

新增 model  

> 步骤三

添加启动数据  

> 步骤四

定义 Model 关系

1. 通过`$ slc loopback:relation`

```js
// 关联
"relations": {
  // 关联 key
     "reviews": {
       "type": "hasMany", // 关联类型
       "model": "Review", // 使用 Model
       "foreignKey": ""  // 外键
     },
     "reviewers": {
       "type": "hasMany",
       "model": "Reviewer",
       "foreignKey": ""
     }
   },
```


> 步骤五

定义访问权限

loopback 通过 access control lists or ACLs. 定义访问权限

Review 权限控制 访问控制应遵守以下规则:  

1. 所有人都有查看权利,但是回复必须要登录
2. 任何人都可以注册,登录,登出
3. 登录的用户可以发表评论, 同步编辑自己的评论, 但是不能修改 删除别人的评论

>> Define access controls (定义访问权限)

通过命令 `$ slc loopback:acl`

>>> 设置步骤
  1. Deny everyone all endpoints. 所有权限不开放
  2. allow everyone to read reviews. 对所有用户开放读取权限


```js
"acls": [
    // deny every type for everyone, 这是 acls 的开始
    {
      "accessType": "*",
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "DENY"
    },
    // 设置所有人可访问权限
    {
      "accessType": "READ",
      "principalType": "ROLE",
      "principalId": "$everyone",
      "permission": "ALLOW"
    },
    // 只有验证过的用户才能 执行 create
    {
      "accessType": "EXECUTE",
      "principalType": "ROLE",
      "principalId": "$authenticated",
      "permission": "ALLOW",
      "property": "create"
    },
    // 只有用户本人才能 修改
    {
      "accessType": "WRITE",
      "principalType": "ROLE",
      "principalId": "$owner",
      "permission": "ALLOW"
    }
  ],
```

### angular 的 sdk

- 介绍 AngularJS SDK
- 生成 lb-services.js
- 拷贝文件

#### 接受 ng sdk

#### 构建 lb-services.js

创建命令
```bash
lb-ng server/server.js client/js/services/lb-services.js
```









- - -
