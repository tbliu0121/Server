// 浏览器的JS环境是不具有操作文件的能力的。
// 但是Node环境下是具有操作文件的能力的。

/**        01 使用require方法引入fs模块
 *   - 在Node中如果要操作文件，就必须引入fs模块。
 *   - fs => file system。
 *   - fs模块中提供了所有操作文件的API。例如fs.reaadFile就是用来读取文件的。
 */
const fs = require('fs');

/**        02 读取文件
 *   - arg01: 目标文件的路径
 *   - arg02: 一个回调函数
 *     - err: 如果读取失败err就是错误对象; 如果读取成功err就是null。
 *     - data: 如果读取成功, data就是数据; 如果读取失败, data就是null。
 */
fs.readFile(
    './File/poem.md',
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);  // 读出数据的形式是二进制转化为十六进制的数据。
            console.log(data.toString());  // 可以通过data.toString()进行转化。
        }
    }
);
