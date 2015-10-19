// https://projecteuler.net/problem=2
function sumOfEvenFibonacci(max) {
    var nums = [1],
        sum = 0,
        i = 0,
        num = 0;
    while (num < max) {
        num = nums[i] + (nums[i - 1] || 1);
        nums.push(num);
        if (num % 2 === 0) {
            sum += num;
        }
        i++;
    }
    console.log(sum);
    return sum;
}

var answer = sumOfEvenFibonacci(4000000);