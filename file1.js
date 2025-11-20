const { a } = require("./file2");
const { a: x } = require("./file3");

console.log(a, x);

const { add } = require("./utils");
const { subs } = require("./utils");

console.log(add(2, 3));
console.log(subs(2, 3));
