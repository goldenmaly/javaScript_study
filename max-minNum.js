let arr = [5,-11,3,57,10];
let max = 0;
let min = 100000000;
let maxIdx = 0;
let minIdx = 0; 

for(let i=0; i<arr.length; i++){
    let item = arr[i]
    
    if(item>max){
        // 최대값은 변수가 비교하는 값보다 항상 큰 수여야 결국 최대값이 결정되기 때문에 비교연산자가 item쪽으로 향한다.
        max = item;
        maxIdx = i;
    }
    
    if(item<min){
        min = item;
        minIdx = i;
    }
}


console.log(max);
console.log(maxIdx);
console.log(min);
console.log(minIdx);