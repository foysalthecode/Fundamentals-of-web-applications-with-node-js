const x = require("./file2");

console.log(x);

const { add } = require("./utils");
const { subs } = require("./utils");

console.log(add(2, 3));
console.log(subs(2, 3));
