(function () {
	var a = "atif aslam";
	module.exports = {
		a,
	};
})();

const { a } = require("./index");
console.log(a);

console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(module);
