const fs = require('fs');

/**        01 文件的写入
 *   - arg01: file path
 *   - arg02: file content
 *   - arg03: config(optional); an object about write file mode such as: r+, w+, a, a+; example: { flag: 'a+' })
 *   - arg04: callback
 */
const content = "Hello every one, my name is Node.js\n";

fs.writeFile(
    './File/writeFile.md', 
    content,
    (err) => {
        console.log('文件写入成功, meow ~');
        if (err) {
            console.log(err);
        }
    }
);

/**        02 文件的追加
 *   - 可以通过fs.appendFile()来实现; 也可以通过设置写文件的操作配置来实现。
 *   - arg01: filePath
 *   - arg02: content
 *   - arg03: callback
 * 
 *   - 【注】appendFile的目标文件如果不存在则会新建一个文件。
 */
const appendContent = "追加了一行文件 wang ~ ";

fs.appendFile(
    './File/writeFile.md',
    appendContent,
    (err) => {
        console.log('追加文件成功, wang ~');
        if (err) {
            console.log(error);
        }
    }
);
