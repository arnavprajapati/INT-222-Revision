// | Type          | Kaam                  |
// | ------------- | --------------------- |
// | **Readable**  | data read karta       |
// | **Writable**  | data write karta      |
// | **Duplex**    | read + write          |
// | **Transform** | read → modify → write |


import fs from 'fs'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

if (!fs.existsSync('input.txt')) {
    fs.writeFileSync('input.txt', 'hello world\nAuto generate text\n')
}

fs.createReadStream('input.txt', { encoding: 'utf-8' })
    .pipe(process.stdout)


await pipeline(
    Readable.from(['Hello\n', 'World\n']),
    fs.createWriteStream('output.txt')
);

fs.createReadStream('output.txt', { encoding: 'utf-8' })
    .pipe(process.stdout)

await pipeline(
    fs.createReadStream('input.txt'),
    fs.createWriteStream('copy.txt')
);