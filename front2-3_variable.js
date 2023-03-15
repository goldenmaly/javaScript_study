
console.log("hello")

// 3. javascript 이스케이프 스퀀스 (| 역슬래스 활용한 특수문자 표현)

console.log('it\'s a book.')

// var : 과거에 사용, 현재는 let, const 권함
// var hoisting : move daclaration from bottom to top

let globalName = 'global'
{
    console.log(globalName);
    let name = 'ana'
    // let name = 'lisa'
    /*
    *위에 코드는 오류발생
        : let은 변수명을 재정의 할 수 없다.  
        : let 중복선언시 데이터 재할당 개념이 아니라 변수를 새롭게 만드는 개념이기 때문이다.
        : let 을 선언한다는 것은 새로운 변수를 생성한다는 것이기 때문에, 변수명 중복을 허용하지 않는다!
    */
        name = 'lisa'
}
console.log(name)
console.log(globalName)
    /**
     * {} 지역범위 block scope 밖에서 선언된 변수는 출력되지만, {} 내에 선언된 변수는 밖에서 출력되지 않는다.
     */

    // const 상수 constance
const dayInWeek = 7;
console.log(`99+${dayInWeek}`)


