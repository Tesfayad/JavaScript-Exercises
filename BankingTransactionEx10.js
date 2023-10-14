// tracking account balance and process transactions
// balance + deposit - withdraw; transaction are credit and debit
// credit: debt - balance;
// debit: balance - withdrawal;

let accountBalance = 1000;

function deposit(deposit) {
    if(isNaN(deposit) || deposit<=0){
        return "Invalid Input";
    }
    accountBalance += deposit;
    console.log(`current balance: ${accountBalance}`);
    return accountBalance;
}

const withdraw = (withdrawAmount)=>{
    if(isNaN(withdrawAmount) || withdrawAmount<=0){
        return "invalid input";
    }
    accountBalance -= withdrawAmount;
    console.log(`current Balance: ${accountBalance}`);
    console.log(`withdraw amount: ${accountBalance}`);
}

function viewBalance(){
    console.log(`account balance: ${accountBalance}`);
}

deposit(5000.00);
withdraw(5000.00);
viewBalance();

