// https://projecteuler.net/problem=1
function sumOfMultiples(multiOne, multiTwo, maxNum) {
    var nums = [],
        sum = 0;
    for (var i = 1; i < maxNum; i++) {
        if ((i % multiOne === 0) || (i % multiTwo === 0)) {
            sum += i;
            nums.push(i);
        }
    }
    console.log(sum);
    return sum;
}

var answer = sumOfMultiples(3, 5, 1000);