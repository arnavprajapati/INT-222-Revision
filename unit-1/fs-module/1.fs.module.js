// | Method         | Return value    |
// | -------------- | --------------- |
// | `readFile()`   | file ka content |
// | `writeFile()`  | `undefined`     |
// | `appendFile()` | `undefined`     |
// | `unlink()`     | `undefined`     |


import fs from 'fs/promises';
try {
    const data = await fs.readFile('sample.txt', 'utf-8')
    console.log(data);
} catch (err) {
    console.log('File not found');
}

await fs.appendFile('sample.txt', '\nNew Line');