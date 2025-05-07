const bankAccount = {
    bankAccountName: "Alice",
    balance: 500
}

let depositAmount = 200;
let withdrawalAmount = 1000;


const getDeposit = function(amount){
    let result = depositAmount + bankAccount.balance;
    return result;

}

const getWithdrawal = function(amount){
    let result = 0;
    if(withdrawalAmount >  bankAccount.balance){
        return `Incomplete transaction!!! Withdrawal amount is greater than balance`
    }
    
    else{
    result = bankAccount.balance - withdrawalAmount
    }
    return result;

}

console.log(getDeposit());
console.log(getWithdrawal());