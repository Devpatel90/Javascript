let numbers=[1,2,3]

function logSquares(arr){
    let data=arr.forEach((element,index) => {
        console.log(element*element);
    });
    return data
}

logSquares(numbers)