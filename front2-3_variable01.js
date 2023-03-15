
console.log('hello');
console.log("hello");
console.log("hello")
    // : 데이터값에는 ''와 "" 모두 사용가능하다.
    // : 마지막에 ;를 찍지 않더라도 적용이 된다.
    // : 변수명에는 "",''를 붙이지 않는다

console.log("2")
console.log('2')
console.log("2022-12-03")
console.log(2022-12-03)
    // : ""를 사용하면 문자로 인식한다.
    // : ""을 입.력하지 않고 숫자를 넣으면 문자가 아닌 숫자로 인식하기 때문에 뺄셈이 된다

    // 2. 변수
    // : 변수 종류 : var, let, const

var num= 123
var greeting= 'hi'
console.log(num)
console.log(greeting)

var x= 2
var y= '2'
console.log(x+x)
console.log(y+y)

    // 3. javascript 이스케이프 스퀀스 
    // (역슬래시를 활용한 특수문자표현: 엔터키 위에 있음.)

console.log('it\'s a book') 
console.log("it's a book")
console.log("New York is called \"The Big Apple.\"")
    // : 특수문자가 사용되기 바로 전에 역슬래시 사용한다.
console.log('hello\nworld')
    // \n: 줄바꿈

    // 4. 변수 세 가지 종류 비교 (var let const)
    // Bolck Scope 지역범위{ } VS Global Scope 전역범위

    // 4-1. var
    // var: 과거에 사용했고 현재는 let, const를 권한다.
    // var hoisting (move declaration from bottom to top)

    // a= 1
    // let a
    // : 변수 선언이 나중에 돼었기 때문에 오류가 뜬다.
    

    // 4-2. let
let globalName= 'global'
{
    console.log(globalName)
    let name = 'ana';
    // : 변수 선언과 동시에 데이터를 할당=정의 함
    console.log(name)
    // let name = 'lisa';
    // : 오류발생: let 은 새로운 변수를 생성하는 것이기 때문에 변수명 중복을 허용하지 않는다.
    // : let을 빼고 재정의할 변수명과 값만 입력해야한다.
    // : var는 순서가 달라져도 오류가 뜨지않기 때문에 중복 재정의할수도 있어서 let으로 사용한다.
        name= 'lisa';
        console.log(name)
        
        name= 'nick';
        console.log(name)
}
console.log(globalName)
console.log(name)
    // : 지역범위 Block Scope { } 안에서 선언한 변수는 범위 Scope 밖에서 출력 console.log()되지 않는다.
    // : let을 { } 밖에서 변수선언 할 경우, 지역범위 Block Scope 안 밖 모두 출력된다.
    // : 선언한 코드가 어느 범위까지 적용될지 예상하는데에 중요하다.


    // 4-3. const 상수 (constants)

const daysInWeek= 7;
console.log('일주일은 몇 일인가? 답:' + daysInWeek + '일')
console.log(`일주일은 몇 일인가? 답:${daysInWeek}일`)
    // 주의 : 역따옴표 사용(TAB키 위에 위치)
    // 프론트엔드2 3:00:00 이어서 시작