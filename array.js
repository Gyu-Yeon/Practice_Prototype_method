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
// 인자에 아무것도 넣지 않을 경우 concat은 호출된 기존 array의 shallow copy를 리턴한다.

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

console.log("copyWithin example 1", testCopyWithin(9, 6));

// 4. Array.prototype.copyWithin()
//
