// 함수형 프로그래밍!!! FP (Functional Programming)
// 수학에서는 입력하나 출력하나

// 명령형, 절차적 vs 함수형
//                  함수를 엮어서 프로그래밍
// 명령형 <-> 선언형
// 절차적 <-> 함수형
// 하드웨어 성능, 컴파일러가 좋아져서 뜨기 시작
// 병렬을 다루면서 서로 동시에 수정하려하는데
// 함수형 프로그래밍은 불변성을 가지고 있어 적합!
// -가오생김-
// 모든 함수는 동사 ex) 더하다
// 어떻게? 무엇을?
// 버그가 잘 안 일어난다 (런타임에러)

const log = console.log;

// 화살표 함수 복습 (익숙해지자!)
//const add = (a, b) => a + b;
const add5 = a => a + 5;
const div2 = a => a / 2;

// 함수형 할 수 있는 조건
// 1. 1급 함수 : 함수가 1급 객체
// 4. 커링
const addIn = function(a) {
    const f = function(){
        return a + 5;
    };
    return f; // f 실행값이 아닌 f 자체 출력
};
// 2. 순수 함수 : 부작용X
let outerVar = 3;
const func = () => {
    return outerVar;
};

log(func());
outerVar = 10;
log(func()); // 이것은 순수 함수가 아님!

const pureFunc = a => a; //순수 함수

log(pureFunc(45));

// 3. 재귀 함수 (다시 되돌아 오는 함수)
// => JS가 적합

// ex) f(x), v(t), sin 0, n!

console.clear()

// ===명령형과 함수형 코드 비교===
// 리스트에서 홀수를 length만큼 뽑아서 제곱한 후 모두 더하기

////////명령형//////////
function f1(as, l) {
    let b = 0;
    let i = 0;
    for (const a of as) {
        if (a % 2) {
            b += a ** 2;
        if (++i === l) break;
        }
    }
    return b;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 5;

log(f1(arr, len));
/////////////////////////

//////////함수형///////////
log(
    arr
        .filter(x => x % 2)
        .slice(0, len)
        .map(x => x ** 2)
        .reduce((acc, val) => acc + val)
)
///////////////////////////

// function: f
// array: xs (뒤에 s)

// map => 똑같은 함수를 적용
const map = (f, xs) => {
    const res = [];
    for (const x of xs) {
        res.push(f(x));
    }
    return res;
};

log(map(x => x ** 2, [1, 2, 3, 4, 5]));

// filter => 참인 것만 돌려 줌
const filter = (f, xs) => {
    const res = [];
    for ( const x of xs) {
        if (f(x)) {
            res.push(x);
        }
    }
    return res;
};

log(filter(x => x % 2, [1, 2, 3, 4, 5])); // 홀수일 때 참

// length => 길이를 구하는 함수
const length = (xs) => {
    const as = [...xs];
    if (xs.pop()) {
        return length(xs) + 1;
    }
    return 0;
};

// reduce => 접는거 (접어서 줄이다) 차원이 줄어듬
/*const reduce = (f, a, bs) => {
    for (const b of bs) {
        a = f(a, b);
    }
    return a;
};

log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]));
*/

const reduce = (f, acc, list) => {
    for (const item of list) {
        acc = f(acc, item);
    }
    return acc;
};

log(
    (acc, val) => acc + val,
    0,
    [1, 2, 3, 4, 5],
)

