import path = require('path');
import fs = require('fs');

export default function(file: string): Promise<any> {
  const filePath = path.join(__dirname, '../../src', file);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        const result = JSON.parse(data)
        resolve(result)
      }
    });
  })
}