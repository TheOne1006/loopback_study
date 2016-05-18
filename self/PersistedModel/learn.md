## PersistedModel
扩展了基本查询和CRUD支持模式。

> event

1. change : 改变事件

> 静态方法 static methods

1. PersistedModel.bulkUpdate(updates, callback)
    - ??
2. PersistedModel.changes(since, filter, callback)
    - ??
3. PersistedModel.create({Object}|[{Object}], callback)
    - 创建实例,
    - Object 对象
    - callback(err, models)
4. PersistedModel.createChangeStream(options, callback)
    - ??
5. PersistedModel.createUpdates(deltas, callback)
    - 创建或更新
6. PersistedModel.currentCheckpoint(callback)
    - ??
7. PersistedModel.destroyAll([where], callback)
    - 删除所有信息
8. PersistedModel.destroyById(id, callback)
    - 通过id 删除信息
9. PersistedModel.diff(since, remoteChanges, callback)
    - ??
10. PersistedModel.enableChangeTracking()
    - 启用对模型所做的更改的跟踪。通常用于复制。
11. PersistedModel.exists(id, callback)
    - 检查该 id 是否存在
12. PersistedModel.find([filter], callback)
    - 查找
13. PersistedModel.findById(id, [filter], callback)
    - 通过id 查找
14. PersistedModel.findOne([filter], callback)
    - 通过filter 查找
15. PersistedModel.findOrCreate([filter], data, callback)
    - 通过filter 查找,或者创建
16. PersistedModel.getChangeModel()
    - ??
    - 获取更改模式。如果改变模式没有正确设置抛出一个错误。
17. 















- - - -
