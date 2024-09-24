const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, c: 3 };

// 1. Object.assign(target, source1, source2, ...)
// target 객체에 source 속성을 복사한다.
// 여러개의 source 객체를 지정할 수 있다.
// 같은 키가 있다면 나중에 오는 source 값으로 덮어쓴다.
// 수정된 target 객체를 반환.

function testAssign(...obj) {
  return Object.assign({}, ...obj);
}

console.log("assign example 1", testAssign(obj1)); // { a: 1, b: 2};
console.log("assign example 2", testAssign(obj1, obj2)); // { a: 1, b: 2, c: 3 };

// 2. Object.create()
// 새로운 객체를 생성할 때 사용한다.
// 지정된 프로토타입 객체와 프로퍼티를 갖는 새로운 객체를 만든다.

const person = {
  greeting: function () {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  },
};

// Object.create()를 사용하여 새로운 객체를 생성.
const john = Object.create(person);

// 새로운 객체에 프로퍼티를 추가.
john.name = "John";

// 메서드 호출
john.greeting(); // 출력: 안녕하세요, 제 이름은 John입니다.
