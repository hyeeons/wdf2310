// 함수선언하기
console.log("<함수선언입니다>");

// 함수 선언문 - 기명함수
// function 함수이름() {}

// 함수 표현식 - 익명함수, 함수를 호출해야 함
// const 함수이름 = function () {}

function hello() {
  return "안녕하세요";
}
console.log(hello());

const world = function () {
  console.log("world");
};
world();

// return
// return이란 함수를 종료하고 값을 반환함

function h1() {
  return "hello";
  console.log("world"); // retrun문 이후에 작성된 코드는 실행되지 않음
}

function h2() {
  return;
  return "hello";
  //return은 하나만 됨 -> hello는 실행되지 않음
}

console.log(h1());
console.log(h2());

// 매개변수
// 매개변수 : 함수를 호출할 때 함수로 전달되는 값

// function 함수이름(매개변수1, 매개변수2) {}
function sum(aa, bb) {
  return aa + bb;
}
console.log(sum(1, 2)); // 3
console.log(sum(5, 10)); // 15
console.log(sum(10)); // 10 + undefined = NaN
console.log(sum(2, 4));

// 객체의 구조분해 할당
// 일반적
// user 객체 : name, age, email

const user = {
  name: "봄이",
  age: 2,
  email: "spring@naver.com",
};

const userW = {
  name: "여름이",
  age: 3,
  email: "summer@hanmail.net",
};

// 함수선언(email 출력)
function getEmail(aaa) {
  return aaa.email;
}

function getName(bbb) {
  return bbb.name;
}

console.log(getEmail(user));
console.log(getEmail(userW));
console.log(getName(user));
console.log(getName(userW));

function getFull(ccc) {
  return `${ccc.name}의 나이는 ${ccc.age}살이며, 이메일은 ${ccc.email}입니다.`;
}
console.log(getFull(user));
console.log(getFull(userW));

// ver.2
function getFull(ccc) {
  const { name, age, email } = ccc;
  return `${name}의 나이는 ${age}살이며, 이메일은 ${email}입니다.`;
}
console.log(getFull(user));
console.log(getFull(userW));

// ver.3
function getFull({ name, age, email }) {
  return `${name}의 나이는 ${age}살이며, 이메일은 ${email}입니다.`;
}
console.log(getFull(user));
console.log(getFull(userW));

// 여러명 객체만들어보기

const users = [
  { name: "봄이", age: 2, email: "spring@naver.com" },
  { name: "여름이", age: 3, email: "summer@naver.com" },
  { name: "가을이", age: 4, email: "autumn@hanmail.net" },
  { name: "겨울이", age: 5, email: "winter@hanmail.net" },
];

console.log(getName(users[2]));
console.log(getFull(users[3]));

// 배열의 구조분해 활동
const animals = ["멍멍이", "냐옹이", "토끼"];

// -----------------함수----------------
function getSecond(array) {
  return array[1];
}
console.log(getSecond(animals));

// ----- ver.1
function getMyPet(mypet) {
  return `내가 키우는 반려동물은 ${mypet[0]}, ${mypet[1]}, ${mypet[2]}입니다.`;
}
console.log(getMyPet(animals));

// ----- ver.2
function getMyPet(mypet) {
  const [a, b, c] = mypet;
  return `내가 키우는 반려동물은 ${a}, ${b},${c} 입니다.`;
}
console.log(getMyPet(animals));

// ----- ver.3
function getMyPet([a, b, c]) {
  return `내가 키우는 반려동물은 ${a}, ${b},${c} 입니다.`;
}
console.log(getMyPet(animals));

// ----- ver.3의 2가지만 출력
function getMyPet([, b, c]) {
  return `내가 키우는 반려동물은 ${b},${c} 입니다.`;
}
console.log(getMyPet(animals));

// ----- ver.3의 마지막까지 빼고 출력
function getMyPet([, b]) {
  return `내가 키우는 반려동물은 ${b} 입니다.`;
}
console.log(getMyPet(animals));
