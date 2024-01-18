// 연산자
console.log("<지금 부터는 연산자 입니다>");

// 1. 산술 연산자
// +, -, *, /, % (나머지 연산자)

// 덧셈연산자
console.log(1 + 2); // 3
console.log("봄 " + "여름"); // 봄 여름

// 뺄셈연산자
console.log(5 - 3); // 2

// 곱셈연산자
console.log(2 * 3); // 6

// 나눗셈연산자
console.log(6 / 4); // 1.5

// 나머지연산자
console.log(7 % 3); // 1

// 나머지연산자 - 적용 가능 예시
// 나머지가 0이면 짝수, 1이면 홀수
// (now % 슬라이드 갯수) => 나머지가 0일 경우 마지막 슬라이드임

// 함수 만들어보기 - 짝수, 홀수 판별하는 함수
// 함수 선언하고 콘솔창에 함수 출력
// isEven : 변수가 짝수인가?
// num을 2로 나눈 나머지가 0이면 true, 아니면 flase

// 함수선언!
function isEven(num) {
  return num % 2 === 0;
}

//함수호출!
console.log(isEven(4));

// 2. 할당연산자
let now = 1;
console.log(now); // 1

now = now + 1; // 주로 사용
now += 1; // 위와 동일한 구문으로 축약형임
console.log(now); // 2 -> 3

let cde = 2;
cde = cde * 2;
cde *= 2;
console.log(cde);

// 3. 부정연산자
// !를 사용하여 true를 flase로, false를 true로 바꿀 수 있음

console.log(!true); // false
console.log(!false); // true
console.log(!!0); // false

// 4. 비교 연산자
// ===, !==, <, >, <=, >=
// ==, !=는 사용하지 않는 것이 좋음

// 일치연산자 (형 변환X)
console.log(1 === 1); // true
console.log(1 === "1"); // false

// 불일치 연산자 (형변환X)
console.log(1 !== 1); // false
console.log(1 !== "1"); // true

// 대소 비교 연산자 (형변환O)
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 > 2);
console.log(1 >= 2);

// 논리 연산자
// &&(and) 연산자
console.log(true && true); // 둘 다 참이라서 => true
console.log(true && false); // 둘 중 하나가 거짓이라서 => false
console.log(1 < 2 && 2 < 3); // 둘 다 참이라서 => true

console.log(true && false); // 둘 다 거짓이라서 false -> 가장 먼저 만나는 거짓 => false
console.log(1 && 0); // 둘 다 거짓이라서 false인데 -> 가장 먼저 만나는 거짓 => 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log(1 && null && 0); // 가장 먼저 만나는 거짓 => null 출력
console.log("a" && "b" && ""); // 빈 데이터 출력
console.log("a" && "b" && "c"); // 모두가 참 -> 참 -> 마지막데이터인 => c출력

// ||(or) 연산자
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); //false

// ?? 병합 연산자
// || 연산자와 비슷하다.
// null 또는 undefined는 제외하고 반환한다.
// 0은 falsy 값이지만 null 또는 undefined가 아니므로 0이 반환된다
console.log("병합연산자입니다.");
console.log(0 || 5); // 5
console.log(0 ?? 5); // 0
console.log(null ?? undefined); // undefined

// 삼항 연산자
// 조건 ? 참일때 : 거짓일때
console.log("삼항연산자입니다.");
console.log(1 < 2 ? "참" : "거짓");
console.log(1 > 2 ? "참" : "거짓");

function isCat(name) {
  return name === "고양이" ? "고양이 맞음" : "고양이 아님";
}
console.log(isCat("고양이"));
console.log(isCat("강아지"));

// 전개 연산자
// ...을 사용하여 배열이나 객체를 펼칠 수 있음

// 1) 배열의 전개
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log("전개연산자입니다.");
console.log(num1.concat(num2));
console.log([...num1, ...num2]);

// 2) 객체의 전개
const dog = {
  name: "멍멍이",
  phone: "010-1234-5678",
};

const dogInfo = {
  ...dog,
  age: 2,
};

console.log(dogInfo);
