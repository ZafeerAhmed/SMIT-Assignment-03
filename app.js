// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

const num = 124323;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));


