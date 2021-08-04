const os = require("os");

//to check bit(32 0r 64 bit)
// console.log(os.arch());

//memory available in ram
// const freeMemory = os.freemem();

// console.log(freeMemory);

// console.log(`${freeMemory / 1024 / 1024 / 1024} is my memory`);

// total memory  in ram
// const totalMemory = os.totalmem();
// console.log(`${totalMemory / 1024 / 1024 / 1024} is my memory`);

//hotname
// console.log(os.hostname());

//platform

// console.log(os.platform());

//dir
// console.log(os.tmpdir());

//od
console.log(os.type());
