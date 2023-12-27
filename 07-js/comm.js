// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var은 현재 잘 사용하지 않음

// 변수 선언!
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

// let 변수 (변수의 값을 변경할 수 있음)
let c = 10;
console.log(c);

// 변수값 변경
c = 20;
console.log(c);

// const 변수 (변수의 값을 변경할 수 없음)

// 변수 선언!
const d = 7;
console.log(d);
console.log(c + d);
// d = 12; 에러발생!
c = 100;
console.log(c + d);

// zero base numbering
// js는 배열의 index가 0부터 시작함
let menu = ["rice", "noodle", "chicken"];
console.log(menu[0]);
console.log(menu[1]);
console.log(menu[2]);

console.log(menu[1] + menu[2]);

const animals = ["개", "토끼", "냥냥이"];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

console.log(menu[2] + animals[2]);

let e = "like";

console.log(animals[2] + e + menu[2]);
console.log(animals[2], e, menu[2]);

// 문자열 string
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현

// 문자열 변수 선언!

let myName = "이현정";
let age = "24";

console.log(myName);
console.log(age);
// 이현정 나이는 29세입니다.

console.log(`${myName} 나이는 ${age}세 입니다.`);

console.log(`${myName}의 나이는 ${age}세 입니다.`);

// boolean (true, false)

let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);

// object 객체 데이터
// 여러 데이터를 하나의 변수에 저장하기 윟 ㅐ사용
// {key:value}
let user = {
  name: "이현정",
  age: "29",
  good: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.good);

console.log(user);

console.log(`${user.name}님, 환영합니다!`);
console.log(`${user.name}나이는 만 ${user.age}세 입니다.`);
console.log(`${user.name}님, 무엇을 도와드릴까요?`);

console.log(
  `${user.name}님은 ${user.good ? "좋은사람이에요" : "좋은사람이 아니에요"}`
);
