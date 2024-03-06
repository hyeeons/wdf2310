const starbucks = ["아메리카노", "자몽허니블랙티", "디카페인라떼"];

console.log(starbucks[0]);
console.log(starbucks.length);

const starbucksMenu = {
  name: "아메리카노",
  price: 4000,
  size: "tall large venti",
};

console.log(starbucksMenu.price);
console.log(starbucksMenu["size"]);

const lee = {
  name: "lee",
  age: 30,
};

const ahn = {
  name: "ahn",
  age: 10,
  parent: lee,
};

const users2 = [
  { name: "lee", age: 30 },
  { name: "ahn", age: 10, parent: "lee" },
];
console.log(lee.name);
console.log(ahn.age);
console.log(ahn.parent.name);

console.log(users2[1].name);

const arr = [1, 2, 3];
const [, b, c] = arr;

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[0], arr[1], arr[2]);

console.log(b, c);

const arr2 = ["강아지", "고양이", "기린", "토끼", "새"];
const [d, e, ...rest] = arr2;

// 첫 번째 요소만 써주고 나머지는 ...rest로
console.log(d);
console.log(e);
console.log(...rest);
console.log(d, ...rest);

const obj = {
  name: "나는야 A!",
  age: "30세지!",
  height: "키는 무려 180cm나 된다구!",
};

const { name, age, height } = obj;

console.log(obj.name);
console.log(obj.name, obj.age);
console.log(obj.name, obj.age, obj.height);

console.log(name, age, height);

const bbb = {
  name: "나는야 B다!",
  fullage: "27세야!",
  fullheight: "",
};

const { name: nname, fullage, fullheight: h = "키 정보 없음" } = bbb;

console.log(nname, fullage, h);

function printCity(props) {
  return props.name || "이름없음";
}

console.log(printCity(obj));
console.log(printCity(bbb));

function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍!";
    case "고양이":
      return "야옹!";
    default:
      return "알 수 없음";
  }
}

console.log(getSound("개"));
console.log(getSound("고양이"));
console.log(getSound("사자"));

function getSound2(props) {
  if (props === "개") return "멍멍~";
  if (props === "고양이") return "야옹~";
  return "알 수 없음!";
}

console.log(getSound2("개"));
console.log(getSound2("고양이"));
console.log(getSound2("사자"));

const lovers = [
  { name: "냥이", age: "2세" },
  { name: "뭉이", age: "3세" },
];

console.log(`${lovers[0].name}의 나이는 ${lovers[0].age}입니다.`);

for (let i = 0; i < lovers.length; i++) {
  console.log(`${lovers[i].name}의 나이는 ${lovers[i].age}입니다.`);
}

for (let lover of lovers) {
  console.log(`${lover.name}의 나이는 ${lover.age}입니다.`);
}

function hello() {
  console.log("hello!");
}

const hello2 = () => {
  console.log("안녕하세요!?");
};

const hello3 = function () {
  console.log("안녕안녕!");
};
hello();
hello2();
hello3();
function sum(a, b = 5) {
  return a + b;
}
console.log(sum(1, 3));
console.log(sum(4));

const user = {
  name: "여름",
  age: 2,
};

function getName({ name, age }) {
  return `${name}이 나이는 ${age}살 입니다.`;
}

console.log(getName(user));

function get2([, b = "기본값"]) {}

function sum4(...rest) {
  return rest;
}

console.log(sum4(1, 2, 3, 4, 5, 6, 7, 8));

const arrow = () => {};

// const sum3 = (x, y) => {
//   return x + y;
// };

const sum3 = (x, y) => x + y;

console.log(sum3(2, 3));

const aa = () => {};

const bb = (x) => {};

const cc = (x, y) => {
  return x + y;
};

const ee = (x, y) => x + y;

const gg = () => {
  return { a: 1, b: 2 };
};

const hh = () => ({ a: 1, b: 2 });

const ii = () => [1, 2, 3];
