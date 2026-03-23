// let user={
//     balance:500,
//     deposit:function(amount){
//         if(typeof amount==="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     withdraw:function(amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount){
//             this.balance-=amount;
//             return this.balance;
//         }
//     },
//     getbalance:function(){
//         return this.balance;
//     }
// }

// user.balance="Rohit";
// console.log(user.getbalance());

// Output: Rohit


// Because in this Function we can directly Access the Balance Variable;

// Solution for this is to make Amount Variable Private

// Lets Understand How


function CreateBankAc()
{
    let balance=500;
    const user={
    
    deposit:function(amount){
        if(typeof amount==="number" && amount>0){
            balance+=amount;
            return balance;
        }
        },
    withdraw:function(amount){
        if(typeof amount==="number" && amount>0 && balance>=amount){
            balance-=amount;
            return balance;
        }
        },
    getbalance:function(){
        return balance;
        }
        }
return user;
}
const customer=CreateBankAc();
customer.deposit(1000);
console.log(customer.getbalance());
customer.withdraw(1150);
console.log(customer.getbalance());
