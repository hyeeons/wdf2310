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

// 나머지 매개변수 (a, ...rest) {}
// 매개변수를 배열로 전달받는다.
// function 함수이름(...매개변수)

function sum(a, b, ...rest) {
  console.log(a, b, rest);
}

sum(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
sum(3, 5, 10); // 3 5 [10]

// 배열의 숫자를 더하는 로직함수
function sumAll(...rest) {
  console.log(rest);
  //   return rest.reduce(fn, 초기값);
  return rest.reduce(function (account, current) {
    return account + current;
  }, 0);
}

sumAll(10, 20);
console.log(sumAll(1, 2, 3, 4, 5));

// 화살표 함수
// const 함수이름 = function () {};  함수의 표현식
// const 함수이름 = () => {}; 매개변수()내용이 없을 경우 화살표 함수

// () => {};  매개변수가 없을 경우
//  x => {};  매개변수가 하나일 경우 소괄호 생략이 가능함
// (x, y) => {}; 매개변수가 두 개 이상일 경우 소괄호로 감싸줌

const helloName = (name) => {
  console.log(`나는 ${name}입니다.`);
};

helloName("이코딩");

const sum2 = (a, b) => a + b;
console.log(sum2(10, 30));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우 (괄호 생략가능)
const b = (one) => {};

// 3. 매개변수가 여러개인 경우 (괄호 생략불가)
const c = (x, y) => {};

// 4. 함수에 return이 있는 경우 (중괄호, return 생략가능)
// return으로 시작하는 경우
const d = (x, y) => {
  return x + y;
};
const d_ = (x, y) => x + y;

// 5. 함수에 return으로 시작하지 않는 경우 (중괄호 생략 불가)
const e = (x, y) => {
  console.log(x);
  return y;
};

// 6. 객체를 반환하는 경우 (객체를 소괄호로 감싸줘야 함)
const f = () => {
  ({ a: 1 });
};

// 7. 배열을 반환하는 경우
const g = () => {
  [1, 2];
};

// 호출 스케일링
// setTimeout(함수, 시간)
// 함수를 인수로 전달

const timer = setTimeout(() => {
  console.log("hello");
}, 3000);

const btnStop = document.querySelector("#btnStop");
btnStop.addEventListener("click", () => {
  console.log("취소되었습니다!");
  clearTimeout(timer, 1000);
});

//setInterval
setInterval(() => {
  console.log("안뇽");
}, 1000);

const slideStop = document.querySelector("#slideStop");

slideStop.addEventListener("click", () => {
  console.log("슬라이드 정지");
  clearInterval(timer);
});

// callback

const bbb = (props) => {
  props();
  console.log("B");
};

const y = () => {
  console.log("Y");
};
bbb(y);

const sum3 = (a, b, c) => {
  // setTimeout(함수, 시간);
  setTimeout(() => {
    return c(a + b);
  }, 1000);
};

sum3(1, 2, () => {
  console.log("hello");
});
