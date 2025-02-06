const fs = require('fs');
const path = require('path');

// try {
//     fs.writeFileSync('Node & Express Learn/testContent/test.txt', 'Hey this line added to test.txt file using writeFileSync method');
//     const result = fs.readFileSync('Node & Express Learn/testContent/test.txt', 'utf-8');
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }


fs.readFile(path.join(__dirname + '/testContent' + '/first.txt'), 'utf-8', (error, result) => {
    if (error) {
        console.log("Error reading first.txt: " + error);
        return;
    } else {
        console.log("Content from first.txt file: " + result);
        const datalineOne = result;
        fs.readFile(path.join(__dirname + '/testContent' + '/second.txt'), 'utf-8', (error, result) => {
            if (error) {
                console.log("Error reading second.txt: " + error);
                return;
            } else {
                console.log("Content from second.txt file: " + result);
                const datalineTwo = result;
                fs.writeFile(path.join(__dirname + '/testContent' + '/test.txt'), `${datalineOne}\n${datalineTwo}`, (error) => {
                    if (error) {
                        console.log("Error writing to file: " + error);
                        return;
                    } else {
                        console.log("Data saved to the test.txt file!");                        
                    }
                })
            }
        })
    }
})





