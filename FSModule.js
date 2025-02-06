const fs = require('fs');

try {
    fs.writeFileSync('Node & Express Learn/testContent/test.txt', 'Hey this line added to test.txt file using writeFileSync method');
    const result = fs.readFileSync('Node & Express Learn/testContent/test.txt', 'utf-8');
    console.log(result);
} catch (error) {
    console.log(error);
}



