// if문 vs 삼항연산자 ternary 비교

// 1-1. if문
let array = [1,2,3];
let text = "";

if(array.lenght===0){ 
    text = 'array 배열은 빈상태!'}
    else { text = 'array 배열 안에 element가 존재!'};

console.log(text);

// 1-2. 삼항연산자 ternary (조건식 : 연산공식)
let array2 = [];
let text2 = array2.length===0? 'array 배열은 빈상태!' : 'array 배열 안에 element가 존재!';

console.log(text2);

// 2-1. 삼항연산자 ternary (조건식 : 매개변수)
function trueOfFalse(isMember){
    return(isMember?'true':'false');
}
console.log(trueOfFalse(true));
// 아래 parameter는 전부 false
console.log(trueOfFalse(0)); 
console.log(trueOfFalse(-0));
console.log(trueOfFalse(""));
console.log(trueOfFalse(null));
console.log(trueOfFalse());


