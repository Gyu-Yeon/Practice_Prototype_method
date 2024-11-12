const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
// 1. Array.prototype.at()
// 0 부터 실행하려는 array의 array.length-1 까지의 정수를 인자로 받아 정수에 해당하는 인덱스 값을 리턴해주는 함수.
// at 함수의 인자로 음수를 넣으면 -1부터 마지막 요소와 연결되어 인자에 해당하는 인덱스 값을 리턴. ex) arr.at(-3) // 8

function testAt(num) {
  return arr.at(num);
}

console.log("at example 1", testAt(-3)); //5

// 2. Array.prototype.concat();
// 두개 이상의 array를 병합하는데 사용되는 함수. *기존 array들을 변경하지 않고 새 array를 리턴한다.
// 인자에 n개의 array를 넣을 수 있다. ex) arr.concat(arr1, arr2, arr3, ....);
// 인자에 아무것도 넣지 않을 경우 concat은 호출된 기존 array의 shallow copy를 한 array를 리턴한다.

function testConcat(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log("concat example 1", testConcat(arr, arr1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3, 5, 7, 9];
console.log("concat example 2", testConcat(testConcat(arr, arr1), arr2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// 3. Array.prototype.copyWithin();
// copyWithin() 메서드는 array의 일부를 같은 array의 다른 위치로 얕게 복사하며, array의 길이를 수정하지 않고 해당 array를 반환합니다.
// 이 method는 인자를 3개를 받는데, target, start, end이다.
// target < -array.length이면, 0이 사용된다.
// target >= array.length이면, 아무것도 복사되지 않는다.

function testCopyWithin(target, start, end) {
  return arr.copyWithin(target, start, end);
}

console.log("copyWithin example 1", testCopyWithin(5, 6)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// 4. Array.prototype.entries();
// 배열의 각 요소에 대해 [인덱스, 요소값] 형태의 쌍을 포함하는 새로운 Array Iterator 객체를 반환하는 메서드입니다. 이 메서드는 배열의 인덱스와 해당 요소의 값을 동시에 순회해야 할 때 유용합니다.
// 원본 배열을 변경하지 않습니다.

const fruits = ["Apple", "Banana", "Orange"];
const iterator = fruits.entries();

for (let entry of iterator) {
  console.log(entry); // [0, "Apple"] [1, "Banana"] [2, "Orange"];
}

for (let [index, value] of fruits.entries()) {
  console.log(`Index: ${index}, Value: ${value}`); // Index: 0, Value: Apple Index: 1, Value: Banana Index: 2, Value: Orange;
}

// 5. Array.from();
// Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만듭니다.

const str = "hello";
const strArr = Array.from(str);
console.log(strArr); // ['h', 'e', 'l', 'l', 'o']

//map 함수 사용 가능.

const range = Array.from({ length: 5 }, (v, i) => {
  console.log("v", v);
  return i * 2;
});
console.log(range); // [0, 2, 4, 6, 8]

// 6. Array.isArray();
// Array.isArray는 주어진 값이 배열인지 아닌지를 확인하는 메서드입니다. true 또는 false를 반환합니다.

// 일반 배열
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray([])); // true

// 배열이 아닌 것들
console.log(Array.isArray("array")); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray("[]")); // false
console.log(Array.isArray({ length: 5 })); // false
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false

// 7 Array.of()
// 전달받은 인자들로 새로운 Array 인스턴스를 생성합니다.

const arrOf = Array.of(8);
console.log(arrOf); // [8];

// new Array()와 Array.of 차이점은 new Array는 인자의 숫자가 array의 length가 되는 반면,
// Array.of의 인자는 array의 요소가 된다는 차이가 있다.

const arrNew = new Array(3);
const arrOf2 = Array.of(3);

console.log(arrNew); // [empty × 3];
console.log(arrOf2); // [3];

// Array.prototype.every()
// every() 메서드는 배열의 모든 요소가 주어진 테스트 함수를 통과하는지 검사합니다. 모든 요소가 조건을 만족하면 true를, 하나라도 만족하지 않으면 false를 반환합니다.
// 빈 배열에 대해 every()를 호출하면 무조건 true를 반환합니다.

const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

const people = [
  { name: "Kim", age: 25 },
  { name: "Lee", age: 19 },
  { name: "Park", age: 35 },
];

const allAdults = people.every((person) => person.age >= 18);
console.log(allAdults); // true

// Array.fill(value, start, end)
// Array.fill()은 배열의 시작 인덱스부터 끝 인덱스까지 정적인 값 하나로 채우는 메서드입니다.

const arrFill = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arrFill); // [0, 0, 0, 0, 0]

const arrFill2 = [1, 2, 3, 4, 5];
arr.fill(0, 2); // 인덱스 2부터 끝까지 0으로 채움
console.log(arrFill2); // [1, 2, 0, 0, 0]

const arrFill3 = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4); // 인덱스 1부터 3까지 0으로 채움(끝 인덱스는 제외)
console.log(arrFill3); // [1, 0, 0, 0, 5]

// Array.filter()
// filter() 메소드는 배열의 각 요소를 테스트하여 조건을 만족하는 요소들만 모아 새로운 배열을 만듭니다.
// 원본 배열을 변경하지 않습니다.
// 새로운 배열을 반환합니다.
// 조건을 만족하는 요소가 없으면 빈 배열을 반환합니다.
// 콜백 함수는 true/false를 반환해야 합니다.

const filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const filterPeople = [
  { name: "김철수", age: 17 },
  { name: "이영희", age: 25 },
  { name: "박민수", age: 30 },
  { name: "정지훈", age: 15 },
];

const adults = filterPeople.filter((person) => person.age >= 20);
console.log(adults);
// [{ name: "이영희", age: 25 }, { name: "박민수", age: 30 }]
