function factorial(number){
    let result = 1;
    for(let i=1; i<=7; i++){
        result = result * i;
    }
    return result;
}

const myNumber = factorial(7);
console.log(myNumber);