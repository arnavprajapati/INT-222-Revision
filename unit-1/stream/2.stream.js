import fs from 'fs'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

await pipeline(
    Readable.from(['OVERWRITE TEXT\n']),
    fs.createWriteStream('data.txt') 
)

await pipeline(
    Readable.from(['APPEND LINE 1\n', 'APPEND LINE 2\n']),
    fs.createWriteStream('data.txt', { flags: 'a' }) 
)

fs.createReadStream('data.txt', { encoding: 'utf-8' })
    .pipe(process.stdout)