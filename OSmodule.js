const os = require('os');

//info about the current user
console.log(os.userInfo());

//system uptime
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);

