const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, c: 3 };

//1. Object.assign(target, source1, source2, ...)
// target 객체에 source 속성을 복사한다.
// 여러개의 source 객체를 지정할 수 있다.
// 같은 키가 있다면 나중에 오는 source 값으로 덮어쓴다.
// 수정된 target 객체를 반환.

function testAssign(...obj) {
    return Object.assign({}, ...obj);
  }

console.log("assign example 1", testAssign(obj1));  // { a: 1, b: 2};
console.log("assign example 2", testAssign(obj1, obj2));  // { a: 1, b: 2, c: 3 };