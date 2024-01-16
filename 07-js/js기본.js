// js 기본!

// String(문자)
console.log("Hello World");

const a = "냥냥이";
console.log(a);

// 리터럴 방식 - 백틱 이용하면 문자열 안에 변수를 넣을 수 있다.
console.log(a + "jabascript World");
console.log(`안녕하세요, ${a}님`);
console.log(`환영합니다. ${a}님!`);

//Number (숫자)
// 따옴표를 붙이지 않으면 숫자로 인식한다.
console.log(123); // 123
console.log(1 + 2); // 3
console.log("1" + 2); // 12
console.log("1" + "2"); // 12

const b = -123;
const c = 1.23;
console.log(b); // -123
console.log(123 + b); // 0
console.log(b, c);
console.log(b + 100, c * 2);

// 숫자로 변환
const d = 0.1;
const e = 0.2;

console.log(d + e);
console.log((d + e).toFixed(1)); // 소수점 첫 째자리까지 보여줘 => 문자열이 됨
console.log(typeof (d + e).toFixed(1)); // type 알려줘
console.log(Number((d + e).toFixed(1))); // 숫자열로 변환해줘

// Boolean(불린데이터 참과 거짓)
const f = true;
const g = false;
if (f) {
  console.log("참");
}

// null, undefined
// null : 값이 없다.
// undefined : 값이 할당되지 않았다.
let age = null; // 값이 없다. => 나이값은 없는 것!
console.log(age); // null
age = 20;
console.log(age); // 20

let height;
console.log(height); // undefined
height = 180;
console.log(height); // 180

// Array (배열)
// 순서가 있음
// 여러개의 값을 순차적으로 나열한 자료형
// [값, 값, 값]

const animals = ["강아지", "고양이", "토끼"];
console.log(animals);
console.log(animals[0]); // 강아지
console.log(animals[1]); // 고양이
console.log(animals[2]); // 토끼
console.log(animals.length); // 배열의 갯수 구하기 : 3
console.log(animals[animals.length - 1]); // 마지막 요소 가져오는 방법

// object (객체)
// 순서가 없음
// 여러개의 값을 순서가 없는 형태로 저장한 자료형
// {key : value}  {이름 : 값, 이름: 값}

const user = {
  name: "Jay",
  age: 27,
  favoriteAnimal: animals[1],
};
console.log(user);

// 점표기법

console.log(user.name, user.age); // Jay 27
console.log(`${user.name}의 나이는 ${user.age}세 입니다.`); // Jay의 나이는 27세 입니다. ES6방식
console.log(user.name + "의 나이는" + user.age + "세 입니다."); // 위와 동일 / 옛날방식
console.log(
  `${user.name}의 나이는 ${user.age}이며, 좋아하는 동물은 ${animals[2]} 입니다.`
);
console.log(
  `${user.name}의 나이는 ${user.age}이며, 좋아하는 동물은 ${user.favoriteAnimal}입니다.`
);

// 대괄호 표기법
console.log(user["name"], user["age"]);

// ex
const userA = {
  name: "멍멍이",
  age: 30,
};

const userB = {
  name: "토깽이",
  age: 7,
  parent: userA,
};

console.log(userB);
console.log(userB.parent.name); // 멍멍이
console.log(userB["parent"]["name"]); // 멍멍이

// 배열에 객체넣기
const users = [userA, userB];
console.log(users); // users 정보 모두 출력
console.log(users[0]); // userA의 정보 출력
console.log(users[0].name); // 멍멍이

// function (함수)
// 특정 코드를 하나의 명령으로 실행할 수 있게 해주는 자료형
// function 함수이름(매개변수) {코드}

function printHello() {
  console.log("안녕하세요");
}
printHello(); // 함수호출을 해야 출력이 됨 => 안녕하세요

function getNumber() {
  return 123;
}

console.log(getNumber); // 함수출력
console.log(getNumber()); // 함수의 값 출력
console.log(typeof getNumber); // function
console.log(getNumber(), typeof getNumber()); // 123 'number'

// type Conversions (형 변환)
const h = 1; // number
const i = "1"; // string

// 동등 연산자 : 값만 비교
console.log(h == i); // h랑 i랑 같아? true => 출력은 같지만 숫자와 문자라 다름

// 일치 연산자 : 값과 타입까지 비교
console.log(h === i); // h랑 i랑 같아? false => 숫자와 문자라서 다른 것

// truthy 와 falsy
// falsy : false, 0, "", null, undefined, NaN

const j = false;
if (j) {
  console.log("참입니다.");
} else {
  console.log("거짓입니다.");
}
