// 구조분해 할당
// 1) 배열의 구조분해

// 2) 객체의 구조분해
const airbnbIcon = {
  img: "airbnb.png",
  text: "한옥",
};

const { img, text } = airbnbIcon;

console.log(airbnbIcon.img, airbnbIcon.text);
console.log(img, text);

// 조건문
// if문, if else문, if else if문

// if () {};
// if () {} else {};
// if () {} else if () {} else {}

// 음수, 양수 판별하는 함수
function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0입니다.";
  }
}

// isPositive();
// console.log(isPositive(3)); // 양수입니다.
// console.log(isPositive(-3)); // 음수입니다.
// console.log(isPositive(0)); // 0입니다.

// ver.2
function isPositive(num) {
  if (num > 0) {
    console.log(`${num}은/는 양수입니다.`);
  } else if (num < 0) {
    console.log(num + "은/는 음수입니다.");
  } else {
    console.log(`${num}은/는 0입니다.`);
  }
}

isPositive(5);
isPositive(-5);

// switch 조건문
// 매개변수로 입력된 값과 일치하는 case문을 실행한다.
// switch (매개변수){case 값1 : return 실행}

// 예제문 ver.1
function getPrice(item) {
  let price;
  switch (item) {
    case "패딩":
      price = "280,000";
      break;
    case "코트":
      price = "148,000";
      break;
    default:
      price = "제품가격이 존재하지 않습니다.";
  }
  return price;
}
console.log(getPrice("패딩"));
console.log(getPrice("코트"));
console.log(getPrice("니트"));

// 예제문 ver.2 - 더 간편함
function getAdress(home) {
  switch (home) {
    case "철수":
      return "서울시 서초구 아이티로 38";
    case "영희":
      return "서울시 송파구 올림픽로 10";
    default:
      return "주소가 존재하지 않습니다.";
  }
}

console.log(getAdress("철수"));
console.log(getAdress("영희"));
console.log(getAdress("짱구"));

// switch문을 if문으로 바꾸기
function getSound(animal) {
  if (animal === "호랑이") return "어흥~";
  if (animal === "종달새") return "종달종달 짹짹짹!";
  return "쉿! 지금은 겨울잠을 자고 있어요";
}

console.log(getSound("호랑이"));
console.log(getSound("종달새"));
console.log(getSound("곰"));

// 반복문
// 반복문이란 특정 코드를 반복적으로 실행할 때 사용한다.

// for문
// for (초기값; 조건; 증감식) {실행될 코드}

// 1부터 10까지 출력
console.log("1부터 10까지");
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// 10부터 1까지 출력 & break문
// 3보다 작은 수 일 경우 종료하는 조건문
// break문 : 전체 반복문 종료
console.log("10부터 1까지");
for (let i = 10; i > 0; i--) {
  if (i < 4) {
    break;
  }
  console.log(i);
}

// continue문
// 현재 반복을 멈추고 다음 반복을 진행 (건너뛰기)
// 홀수만 출력 - 짝수일 경우에만 건너뛰기!
console.log("홀수만 출력");
for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// 짝수만 출력
console.log("짝수만 출력");
for (let i = 10; i > 0; i--) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

// for문으로 배열 출력
const listAnimals = ["강아지", "고양이", "물고기"];
console.log(listAnimals);
console.log(animals.length);
console.log(listAnimals[0], listAnimals[1]);

for (let i = 0; i < 3; i++) {
  console.log(listAnimals[i]);
}

// for of문
// for (변수 of 배열) {실행될 코드}

//예제1
for (let typeanimal of listAnimals) {
  console.log(typeanimal);
}

// 예제2
const userSeasons = [
  { name: "겨울", age: 2 },
  { name: "가을", age: 3 },
  { name: "봄", age: 4 },
];

// for문
for (let i = 0; i < userSeasons.length; i++) {
  console.log(userSeasons[i]);
  console.log(userSeasons[i].name);
}

console.log("<for of 문입니다.>");
// for of 문
for (let users of userSeasons) {
  console.log(users);
  console.log(users.name);
}

// for in 문
// for (변수 in 객체) {실행될 코드}
console.log("<for in 문입니다.>");
const userC = {
  name: "봄이",
  age: 2,
};

// 점 표기법
console.log(userC.name, userC.age); // 봄이 2

// 대괄호 표기법
console.log(userC["name"], userC["age"]); // 봄이 2

for (let key in userC) {
  console.log(key); // name, age
  console.log(userC[key]);
}

// while문
// while (조건) {실행될 코드}

// 1부터 10까지 더하기
console.log("<while문 입니다>");
let k = 1; // 초기값
let sum = 0; //합계를 저장할 변수 0은 초기값

while (k <= 10) {
  //   sum = sum + k;
  //   k = k + 1;
  //   k += 1; // k에 1을 더함
  //
  sum += k; // sum에 k를 더함
  k++; //k에 1을 더함
}

console.log(sum);

// do while문
// do {실행될 코드} while {조건}

// 0부터 9까지 출력
let z = 0;
do {
  console.log(z), z++;
} while (z < 10);
