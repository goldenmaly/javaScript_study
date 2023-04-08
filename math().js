// num1 : 10, num2 : 3 일 때 몫과 나머지를 구하자.
// 기대값 3
// 나머지 1


function math01 (num1, num2) {
    return Math.floor(num1/num2);
    // Math.floor 는 인수보다 작거나 같은 수 중에서 가장 큰 정수 반환 : 버림
}

function math02 (num1, num2){
    return Math.ceil(num1/num2);
    // Math.ceil 은 인수보다 크거나 같은 수 중에서 가장 작은 정수 반환 : 올림
}

const math03 = (num1, num2) => 
    Math.fround(num1/num2);


console.log(math01(10,3));
console.log(math02(10,3));
console.log(math03(10,3));