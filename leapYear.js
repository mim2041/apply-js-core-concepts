function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log("Your year is a leap year ", year);
        return true;
    }
    // else{
    //     // console.log("Your year is not a leap year ", year);
    //     return false;
    // }
    return false;

}

// isLeapYear(1952);
const myYear = isLeapYear(2000);
console.log("My Year", myYear);