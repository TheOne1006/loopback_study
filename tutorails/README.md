## loopback 教程和案例

参考网址: <https://docs.strongloop.com/display/public/LB/Tutorials+and+examples>  

### demo


### 相关lib
[loopback-boot](https://github.com/strongloop/loopback-boot):启动初始化 loopback 程序

1. 配置 dataSource
2. 定义常用model
3. 配置model, 并把model 附属到 dataSource 上
4. 提供 appliction 配置
5. 启动 boot 脚本


#### boot(app, [options], [callback])

1. app: 一个由 `loopback()` 创建的app
2. options: {string, object} string 代表项目根路径
