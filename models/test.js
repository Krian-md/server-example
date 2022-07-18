
const { Duplex } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

class FileHelper extends Duplex {
  constructor(opt) {
    super(opt);

    this.ungzip = zlib.createUnzip();
    this.gzip = zlib.createGzip();
  }

    readAndWrite(fileFrom, fileTo) {
        const readableStream = fs.createReadStream(fileFrom);
        const writeableStream = fs.createWriteStream(fileTo);

        readableStream.pipe(this.gzip).pipe(writeableStream);
    }

    read(fileFrom) {
        const readableStream = fs.createReadStream(fileFrom);

        let chunk;

        readableStream.on('readable', () => {
            while ((chunk = readableStream.read()) !== null) {
                // console.log(`read: ${ungzip(chunk)}`);
                console.log(`read: ${chunk}`);
            }
        });
    }
}

const fileHelper = new FileHelper({ 
  readableHighWaterMark: 2, 
  writableHighWaterMark: 2 
});

// fileHelper.readAndWrite('read.txt', 'write.txt');
fileHelper.read('read.txt');

