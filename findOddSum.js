function getSumOfAnArray(numbers){
    let sum = 0;
    for(var i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index,element, sum);
    }
    return sum;
}

function getOddNumberOfAnArray(numbers){
    const oddNumbers = [];
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element);
            sum = sum + element;
            console.log(index, element, sum);
        }
        
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberOfAnArray(myNumbers);
getSumOfAnArray(myNumbers);