
// challlange 1

// function shoppingCart(price, quantity){

//     let jami = price * quantity;

//     if(quantity >= 5){
//         jami = jami -(jami * 0.20);
         
//     } else if (quantity >= 5){
//         jami = jami - (jami * 0.10);
//     }

//     return jami;
    
// }

// console.log(shoppingCart(10, 2));
// console.log(shoppingCart(10, 5));
// console.log(shoppingCart(29, 7));

// challange 2

// function passChecker(pass){
//     let res = 0;

//     if (pass.length >= 8) res++;
//     if (/[A-Z]/.test(pass)) res++;
//     if (/[0-9]/.test(pass)) res++;
//     if (/[!@#$%^&*]/.test(pass)) res++;

//     if (res <= 1){
//         console.log("Weak")
//     } else if (res == 2){
//         console.log("Medium")
//     } else {
//         console.log("Strong")
//     }
// }

// passChecker("Salom4564");

// challange 3

// function withdraw(amount){
//     let hundred = Math.floor(amount / 100);
//     amount = amount % 100;

//     let twenty = Math.floor(amount / 20);
//     amount = amount % 20;

//     let ten = Math.floor(amount / 10);
//     amount = amount % 10;


//     console.log(hundred + " x 100$")
//     console.log(twenty + " x 20$")
//     console.log(ten + " x 10$")
// }

// withdraw(735)


// challange 4


// function trafficLight(){
//     console.log("Red");

//     setTimeout(() => {
//         console.log("GReen");

//         setTimeout(() => {
//             console.log("Yellow");
      
//             setTimeout (() => {
//                 trafficLight();

//             }, 2000)
//         }, 3000)
//     }, 5000)
    
// }

// trafficLight();


// challange 6


// function bankAccout(){

//     let balance = 0;

//     function deposit(amount){
//         balance += amount;
//         console.log("deposit: " + amount)
//     } 

//     function withdraw(amount){
//         if(balance >= amount){
//             balance -= amount;
//             console.log("withdraw: " + amount);
//         }
//     }

//     function viewBalance(){
//         console.log("balance: "+ balance)
//     }

//     return {
//         deposit,
//         withdraw,
//         viewBalance
//     };
// }

// let account = bankAccout();

// account.deposit(100);
// account.withdraw(50);
// account.viewBalance();

// challange 7

// function accsesSytem(role, action)
// {
//     if (role == "Admin"){
//         console.log("Allowed");
//     } else if (role == "editor"){
//         if(action == "edit" || action == "view"){
//             console.log("Allowed");
//         } else {
//             console.log("Not allowed")
//         }
        
//     } else if (role == "viewer"){
//         if(action == "view"){
//             console.log("allowed");
//         } else {
//             console.log("not allowed")
//         }
    
//     } 
// }

// console.log(accsesSytem("Admin", "delete"))
// console.log(accsesSytem("editor", "edit"))
// console.log(accsesSytem("viewer", "delete"))


// challange 8

function dynamicCalculator(salary){
    let tax = 0;
    if(salary <= 10000){
        console.log("Tax = " + tax)
    } else if (salary > 10000 && salary <= 50000){
        tax = salary * 0.10;
        console.log("Tax = " + tax)
    } else if (salary > 50000){
        tax = salary * 0.20;
        console.log("Tax = " + tax)
    }
}

dynamicCalculator(51000)