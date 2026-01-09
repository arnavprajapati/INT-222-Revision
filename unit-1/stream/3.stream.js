import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';

await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.txt.gz')
);

console.log('File compressed');

await pipeline(
    fs.createReadStream('input.txt.gz'),
    zlib.createGunzip(),
    fs.createWriteStream('decompressed.txt')
);

console.log('File decompressed');