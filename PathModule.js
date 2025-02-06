const path = require('path');
console.log(path.sep);

const filePath = path.join(path.sep, 'Modules Intro', 'app.js');
console.log(filePath);


console.log(path.isAbsolute(filePath));
