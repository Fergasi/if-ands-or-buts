const prompt = require('prompt-sync')();

const person1 = Number(prompt("How much did person 1 pay? "));
const person2 = Number(prompt("How much did person 2 pay? "));

const totalbill = person1 + person2;
const billsplit = totalbill / 2;

if (person1 > billsplit) {
    const overpay = person1 - billsplit;
    console.log("Person 2 owes $", overpay, "to person 1");
} else if (person2 > billsplit) {
    const overpay = person2 - billsplit;
    console.log("Person 1 owes $", overpay, "to person 2");
}