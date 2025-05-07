const prompt = require('prompt-sync')()

console.log();
const getPassword = (passwordLength, uppercase, lowercase, numbers, specialCharacters)=>{
    if (passwordLength < 4 || isNaN(passwordLength)) {
        console.log("invalid input please try again")
        console.log(prompt("Enter password length: "));
    }
    let useUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let useLowercase = "abcdefghijklmnopqrstuvwxyz";
    let useNumbers = '0123456789';
    let useSpecialcharacters = '"~!@#$%^&*()-_=+|:?/.,|"';

          


}
