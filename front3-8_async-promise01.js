// Promise syntax
// const myPromise = new Promise((resolve, reject)=>{실행코드구현...})

// 예제1 - promise의 resolve : 성공했을 때의 상황
/*
console.log(1);

const myPromise = new Promise( (resolve, reject) => {
    setTimeout( resolve(2), 5000);
    }
)

myPromise.then( n=>{
    console.log(n);
    }
)

console.log(3);
*/

// 예제2 - promise의 reject : 실패했을 때의 상황
/*
const myPromise2 = new Promise ( (resolve, reject)=>{
    setTimeout(reject(new Error()),5000);
});

myPromise2
.then(n=>{console.log(n);})
.catch(error=>{console.log(error);})
*/

// 예제3 - promise의 resolve, reject : 성공 또는 실패했을 때 상황
function increaseAndPrint(n){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            const value = n+1;

            if(value===5){
                const error = new Error();
                error.name = 'FiveIsError'
                reject(error);
                return;
            }

            console.log(value);
            resolve(value);

        },3000 )
    })
}

increaseAndPrint(2).then((n)=>{
    console.log('result:', n);
})

increaseAndPrint(4).then((n)=>{
    console.log('result:', n);
})

