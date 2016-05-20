## Controlling data access 访问控制

1. Specifying user roles
    - User access types
2. Defining access control
3. Using the ACL generator to define access control
    - Example
4. Applying access control rules
    - ACL rule precedence
5. Debugging


### Specifying user roles(需要什么样的用户权限)

第一步确定需要什么样的权限是 app 需要的, 大多数限制在于 区分 登录认证用户/非登录用户, 以及 是否有管理员权限. 应需要对额外的角色赋予一定的权限.  


### User access types (用户权限种类)

loopback 内置的 User model 拥有响应的REST API ,它们继承  PersistedModel 的 CURL 方法.  
每一个 User model 的 CURL 方法, 都会映射到 READ 或者 WRITE 方法.  
具体如下:  

__READ__:  

1. exists() : 确定用户是否存在布尔方法
2. findById() : 通过 Id 查找用户是否存在
3. find(): 通过 匹配 查找所有 User
4. findOne(): 查找符合指定条件的单个用户实例
5. count(): 统计符合条件的用户数量

__WRITE__:  

1. create(): 创建一个新用户
2. updateAttributes (update) : 更新一个用户的记录
3. upsert (update or insert) : 更新/创建一个用户
4. destroyById (equivalent to removeById or deleteById) : 通过id 删除指定记录

其他的方法,默认的访问类型是 __EXECUTE__  

### Defining access control(定义访问控制)

使用 ACL generator 可以创建访问控制,不过之前需要明确的了解 配置选项  

例如 [loopback-example-access-control](https://github.com/strongloop/loopback-example-access-control)的权限种类
1. $everyone : 所有人
2. $unauthenticated : 为认证用户
3. $authenticated : 已认证用户
4. teamMember : 队伍成员
5. $owner : 所有者
6. admin : 管理员

### Applying access control rules(应用访问规则)

所有请求会被映射到具有三个属性的对象:  

1. model - 目标模型名称 ,如 'User'
2. property - 目标方法名, 如 'find', 也可以使用数组, 让他们拥有相同的规则
3. accessType - 类型, 有 'EXECUTE', 'READ', 'WRITE'

ACL规则被描述为对象的数组


### ACL rule precedence(acl 规则优先级别) ??

一个单一的模型可能有应用了几个访问控制列表：根据 access type 决定优先权  

1. DENY
2. ALLOW
3. DEFAULT

访问类型优先级（特异性顺序）按以下顺序：  

1. Type (read, write, replicate, update)
2. Method name
3. Wildcard (通配符)

在一般情况下，更具体的规则将优先于更一般的规则。 具体细节度越高越优先.  

> 在每个级别，匹配得出三点:

- 3: exact match            精确匹配
- 2: wildcard match ('\*')  通配符
- -1: no match              未匹配

得分高的规则会接管低规则,


#### Debugging (调试)

指定环境变量`$export DEBUG=loopback:security:*`, 打印检查进入的日志,

























- - -
