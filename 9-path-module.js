const path = require('path');

console.log(path.sep);

const filepath = path.join('tutorial', 'subfolder', 'text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'tutorial', 'subfolder','text.txt')
console.log(absolute)