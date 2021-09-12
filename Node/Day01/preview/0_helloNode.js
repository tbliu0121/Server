/***       NodeJS 特性
 *   - 可以解析JS代码并且没有浏览器的安全级别的限制，提供了很多系统级的API
 *   - 文件的读写 (File System)
 *   - 进程的管理 (Proess)
 *   - 网络通信（HTTP / HTTPS
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 8848;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Nodejs ~');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}/`);
});
