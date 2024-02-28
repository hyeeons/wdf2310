import hello from "./module";
import { name, age as num, obj } from "./module";
import { a, b } from "./index";

hello();

console.log(name);
console.log(num);
console.log(obj);

a();
b();
