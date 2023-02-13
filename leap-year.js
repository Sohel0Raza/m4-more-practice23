function findLeapYear(years){
    let leapYear = [];
    for(let i = 0; i < years.length; i++){
        const element = years[i]
    if(element % 4 === 0 || element % 100 === 0 || element % 400 === 0)
    leapYear.push(element)
    }
    return leapYear;
}
const leapYears = findLeapYear([2023, 2024, 2025, 2028, 2030])
console.log(leapYears)