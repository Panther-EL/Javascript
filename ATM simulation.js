const prompt = require('prompt-sync')();
let balance = 1000;
while(true){
    //Show menu options
    let options = ['1.Check balance','2.Deposit money','3.Withdraw money', '4.Exit']
    for(let i = 0; i<options.length; i++){
        console.log(options[i])
    }
    
    
    //Get user choice
    const choice = Number(prompt('Enter your choice:')); 
    switch(choice){
        case 1:
            //Display balance
            console.log(`Your balance is ${balance}`);
            break;


        case 2:
            //Ask for deposit money
            let deposit = Number(prompt('Enter the amount you want to deposit:')); 
            if(deposit>0){
                console.log('Deposit accepted');
            }else{
                console.log('Deposit not accepted');
            }
            let current_balance = deposit + balance;
            console.log(`Your balance is ${current_balance}`); // Updated balance
            break;


        case 3:
            //Ask for the withdrawal amount
            let withdraw_amount =Number(prompt('Enter the amount you want to withdraw:')); 
            if(withdraw_amount>0 && withdraw_amount<=balance){
                console.log('Withdrawal allowed');
            }else{
                console.log("Withdrawal isn't accepted");
            }
            let new_balance = balance-witdraw_amount;
            console.log(`Your new balance is ${new_balance}`); //Updated balance
            break;

            case 4:
                console.log('Bye');
                process.exit();
            default:
                console.log('Invalid choice');
  
}
}
