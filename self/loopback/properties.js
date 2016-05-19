/**
 * ---------------------------------
 * Class loopback 的静态属性
 * 1. version 版本号
 * 2. mime
 * 3. isBrowser 是否在浏览器环境中,只读
 * 4. isServer 是否在服务器环境中
 * 5. registry 全局注册对象 ??
 * 6. faviconFile favicon 默认路径
 * ---------------------------------
 *
 */

var loopback = require('loopback');
var debug = require('debug')('loop:*');

debug('loopback.version: %s', loopback.version);
debug('loopback.mime: %s', loopback.mime); // ?


// 是否在浏览器环境中,只读属性
debug('loopback.isBrowser: %s', loopback.isBrowser);

debug('loopback.isServer: %s', loopback.isServer);


debug('loopback.registry:');
debug(loopback.registry);

debug('loopback.faviconFile path : %s', loopback.faviconFile);
