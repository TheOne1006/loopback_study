module.exports = function(MyUser) {

  /**
   * sayHi 方法并没有暴露给 http
   * @param  {Function} cb 回调
   */
  MyUser.sayHi = function (cb) {
    cb(null, 'hi');
  };
  // 
  // // 定义自己的 加密方式
  // MyUser.hashPassword = function (plain) {
  //   return plain;
  // };

  /**
   * remote method
   * 怎么暴露给http
   * @arg 方法的值
   * @arg {object}
   *
   */
  MyUser.remoteMethod(
    'sayHi',
    {
      'accepts': [], // 对请求进行过滤
      // sayHi 中不是通过 return返回,而是需要在 returns 中进行组装
      // 返回格式 {result: string }
      'returns': [
        {
          'arg': 'result',
          'type': 'string'
        }
      ],
      'http':{          // 声明 url , 和方法
        'verb': 'get',
        'path': '/say-hi'
      }
    }
  )

};
