const prompt = require('prompt-sync')();

let password = 12345

let passwordattempt = Number(prompt("Please enter yours password: "));

if (passwordattempt === password){
    console.log("Success")
} else console.log("Password incorrect, please try again");