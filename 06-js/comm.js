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

// 배열
// 여러 데이터를 순서대로 저장하기 위해 사용합니다.

let seasons = ["spring", "summer", "fall", "winter"];

console.log(seasons);
console.log(seasons[0]);
console.log(seasons[3]);
console.log(seasons[2]);

// 함수 (Function)
// 특정 기능을 수행하는 코드의 집합

// 함수선언!
function sayHello() {
  // 함수내용
  console.log("안녕하세용!");
}

// 함수호출
sayHello();

// 함수의 재사용
// 국어, 수학 점수를 전달하면 총점을 계산하는 함수

// 함수선언!
function sum(a, b) {
  return a + b;
}

console.log(sum(70, 80));
// 함수의 재사용
let f = sum(85, 95);
let g = sum(20, 60);
let h = sum(70, 100);

console.log(f);
console.log(f, g, h);

// 함수선언과 재사용!
// 두 점수의 차이

function gap(a, b) {
  return a - b;
}

let user1 = gap(10, 50);
let user2 = gap(100, 80);
let user3 = gap(50, 70);

console.log(user1, user2, user3);
console.log(user2);

// 기명함수
function hello() {
  console.log("안뇽");
}

hello();

// 익명함수
let hello2 = function () {
  console.log("안뇽22");
};

hello2();

// 화살표 함수
// 익명함수의 일종 =>가 fuction의 역할을 하는 것 (자리바꿈)

let helloArrow = () => {
  console.log("안녕 난 화살표함수야. 편리하지?");
};

helloArrow();

// if문
// if (조건) {참일 경우 실행문} else {거짓일 경우 실행문}
// if () {} else {} 쓰고 작성할 것

if (true) {
  console.log("true");
} else {
  console.log("false");
}

// if문 연습

if (hungry) {
  console.log("i am hungry");
} else {
  console.log("i am not hungry");
}

// DOM API
// document object model들을 조작할 때 사용 - HTML 문서의 요소를 제어하는 방법
// Document Object Model, Application Programming Interface

// HTML 요소(Element) 검색
// 1) document.querySelector(".box"); 작성
// 2) const boxEl = document.querySelector(".box"); 변수설정

const boxEl = document.querySelector(".box");

// boxEl을 클릭했을 때, 할 일을 함수로 정의할 것
// 이벤트(click), 일어날 일 함수(function() {일어날 일})
boxEl.addEventListener("click", function () {
  console.log("click");
  // boxEl 요소에 active 클래스 추가
  boxEl.classList.add("active");
});

// js가 생각하기에 html은 글자임! 그래서 따옴표 필요

const tabEls = document.querySelectorAll(".tab");
console.log(tabEls);

// 각각 적용할 경우 - forEach => function 함수를 각각 실행한다는 것 (이 경우에는 4번이 됨)
// function(각각의 엘리먼트 요소를 잡고, 몇번째 아이를 잡을 건지 index를 넣어줌) {실행될 내용}
tabEls.forEach(function (tabEl, index) {
  console.log(tabEl, index);
  tabEl.classList.add(`tab-${index + 1}`);
});
