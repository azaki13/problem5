/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

// Step 1. Start with n = 1
// Step 2. See if n is divisible by all numbers from 1 to maxNum
// Step 3. If it is, return n


function problem5(maxNum){
    let n = 1
    let shouldBreak = false
    while (!shouldBreak) {
        for(let j = 2; j <= maxNum; j++){
            if (n % j !== 0){
                n++
                break;
            }
            if(j === maxNum) {
                shouldBreak = true
            }
        }
    }
    return n
}

const ans = problem5(20);

console.log("The answer is: " + ans)