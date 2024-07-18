let numbers=[1,2,-3,4,-5]

function findIndexOfFirstNegative(num) {
    for (let x=0; x<num.length; x++) {
        if (num[x] < 0) {
            return x;
        }
    }
    return -1;
}


console.log(findIndexOfFirstNegative(numbers));