function factorial(number){
    let result = 1;
    for(let i=number; i>=1; i--){
        result = result*i;
    }
    console.log(result);
}
factorial(7);
factorial(9);
factorial(5);