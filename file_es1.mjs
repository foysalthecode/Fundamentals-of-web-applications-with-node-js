// const { a } = require("./file2");
import { a } from "./file_es2.mjs";
import { a as x } from "./file_es3.mjs";

// const { add } = require("./utils");
// const { subs } = require("./utils");

import utils from "./utils_esm/index.mjs";
console.log(utils.add(2, 3));
console.log(utils.biyog(5, 3));

// console.log(a, x);
