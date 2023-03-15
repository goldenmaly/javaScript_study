function sleep(ms) {
    return new Promise ((resolve)=>{
        setTimeout(resolve, ms)
    })
}
async function process(){
    console.log("1 - Hello, This is async test")
    await sleep(3000);
    console.log("2 - This code starts in 5minutes!")
}

// process()만 호출해도 되고, .then을 써서 다음 작업도 추가작성 가능하다.
process().then(()=>{console.log('3 - async test is done')});