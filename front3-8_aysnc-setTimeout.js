// 비동기 async에 대하여
// 동기는 현재 코드가 실행을 완료된 후 다음 코드가 실행되는 것, 비동기는 코드가 실행되는 동안 기다리지않고 다음 코드가 실행되는 것을 의미한다.


// 예제1
// setTimeout : ms만큼 기다린 후 호출할 함수


// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// }, 3000);

// console.log(3);


// setTimeout(()=>{console.log(3);}, 1000)

// 예제2
function work(){
    setTimeout(()=>{
        const start = Data.now();
        for(let i=0; i<1000000000; i++){

        }
        const end = Data.now();
        console.log(end-start+'ms');
        }, 0)  // 실제는 0이 아닌 4; mdn에서 setTimeout에 관련문서 있음
}

console.log('one')
work();
console.log('two')