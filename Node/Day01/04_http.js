/**        01 引入http模块
 *   - 可以通过此模块创建一个Web服务器。
 */
const http = require('http');

/**       02 创建服务器实例
 *   - 使用http.createServer()方法创建一个Web服务器
 *   - 服务器用于接收请求并返回请求数据
 *       - 发送请求
 *       - 接受请求
 *       - 处理请求
 *       - 返回结果
 *   - 通过serevr.on()方法来注册对应的请求事件
 *     - arg0: methods, such as request, get etc.
 *     - arg1: callback
 */
const server = http.createServer();

// 03 注册需要的请求方法
server.on(
    'request', 
    () => {
        console.log('收到了客户端的请求了 。。。');
    }
);

// 04 绑定端口号启动服务器
// 注: 由于没有返回数据, 因此在浏览器中输入对应的地址后浏览器会一直处于加载状态中; 只能在控制台中看到输出。
server.listen(
    8848,
    () => {
        console.log('启动本地服务器, 可通过 http://127.0.0.1:8848 访问');
    }
);