let num = 12345;

let reversedNum = 0;

while (num > 0) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10); 
}
console.log(reversedNum); 

// 0! = 1
// 1! = 1

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 5! = 1 * 2 * 3 * 4 * 5 = 120

let num1 = 5;

let factorial = 1; // 24 * 5 = 120
console.log(typeof factorial);
// i = 6

if(num1 == 1 || num1 == 0){
    factorial = 1
}else{
    for (let i = 1; i <= num1; i++) {
        factorial = factorial* i;
    }    
}

//  i 1<->5

console.log(factorial); 

// i + j => 2, 3, 7

// for n = 6, m = 3
// 1 2 1 2 1 2      i = 1
// 2 1 2 1 2 1      i = 2
// 1 2 1 2 1 2      i = 3

// 1 2 3 4 5 6 


let n = 6;
let m = 6;

for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
        if((i+j) % 2 == 0){
            process.stdout.write(String(1))
        }else{
            process.stdout.write(String(2))
        }
    }
    console.log();
}


