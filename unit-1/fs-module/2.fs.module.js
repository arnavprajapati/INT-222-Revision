import fs from 'fs/promises';

try {
    let data;

    try {
        data = await fs.readFile('sampleee.txt', 'utf-8');
    } catch {
        console.log('File not found, creating file...');
        await fs.writeFile('sample.txt', 'Initial Content');
        data = 'Initial Content';
    }

    console.log(data);

    await fs.appendFile('sample.txt', '\nNew Line');

    const updatedData = await fs.readFile('sample.txt', 'utf-8');
    console.log(updatedData);

} catch (err) {
    console.error('Unexpected error:', err);
}