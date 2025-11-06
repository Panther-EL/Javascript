const shortcode = "*170#";

let balance = 100;
const pin = 1234;
let dialShortcode = "*170#";
const attempt = 3;

for (let i = 0; i < attempt; i++)
if(dialShortcode == shortcode){
    console.log(
        `
        1.Transfer Money
        2.Momo pay
        3.Airtime
        4.Allow cash out
        5.Financial
        6.My Wallet
        
        `
    );
    break
    
}
else{
    dialShortcode = "*170#";
}

 let option = 1;
let send =() => {
    let usernumber = "0551379948";
    let amount = "100";

    if(amount <= balance){
        for(let i = 0; i < attempt; i++){
            let yourPin = "1234";
            if(yourPin == pin){
                balance = balance - amount;
                let text = `Payment of ${amount} made to ${userNumber}made successfully. Your new balance is ${balance}`;
                console.log(text);
                break
            }
        }
        
    }
    else{
        console.log("invalid amount")
    }
}
