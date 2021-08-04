const path = require("path");

//dir
// console.log(path.dirname("C:Users/ratulDesktop/node js/path.js"));

//extension name
// console.log(path.extname("C:Users/ratulDesktop/node js/path.js"));

//base name(to get file name u r working)
// console.log(path.basename("C:Users/ratulDesktop/node js/path.js"));

//path parse get root dir base ext name all together
const myPath = path.parse("C:Users/ratulDesktop/node js/path.js");

console.log(myPath.root);
