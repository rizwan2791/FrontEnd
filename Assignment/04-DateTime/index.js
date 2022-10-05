const datefns = require("date-fns");

const arrDates = [
    new Date(1984,5,30),
    new Date()
]

console.log(arrDates);

arrDates.forEach(date=>{
    console.log(datefns.addYears(date,5));
})

const format = require('date-fns/format');
const stPattysDay = new Date('2020/03/17');
const formattedDate1 = format(stPattysDay, 'MM/dd/yyyy');
const formattedDate2 = format(stPattysDay, 'MMMM dd, yyyy');

console.log(formattedDate1);
console.log(formattedDate2);


const addYears = require('date-fns/addYears');
const differenceInDays = require('date-fns/differenceInDays');
const differenceInBusinessDays = require('date-fns/differenceInBusinessDays')

const startDate = new Date('2020/01/01');
const endDate = new Date('2020/12/24');
const daysBetween = differenceInDays(endDate, startDate);
const workdaysBetween = differenceInBusinessDays(endDate, startDate);

console.log(daysBetween);
// => 358

console.log(workdaysBetween);
// => 256
















