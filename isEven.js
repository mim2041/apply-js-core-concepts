// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(98);
console.log(myNumber);