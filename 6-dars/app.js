

 // 1

//  let car = {
//     brand: "Tesla",
//     model: "MOdel S",
//     yar: 2024,
    
//     start: function(){
//         console.log("Car is starting");
//     }
//  };
//  console.log(car.brand);
//  car.start();

//  // 2
 
//  let person = new Object();
//  person.name = "Alice";
//  person.age = 25;
//  person.great = function() {
//     return "Hello, my name is ${this.name}";
//  };

//  console.log(person.great())

//   // 3

//   function createPerson(name, age) {
//     return {
//         name,
//         age,
//         great(){
//             return 'Hi, I am ${this.name}, and Iam ${this.age} years old.';
//         }
//     };
//   }

//   let person1 = createPerson("Alice", 25);
//   let person2 = createPerson("Bob", 35);

//   console.log(person1.great());
//   console.log(person2.great());


//   // 4

//   function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.great = function(){
//         return 'Hi, I am ${this.name}, and Iam ${this.age} years old.';
//     };
//   }

//   let person3 = new Person("Alice", 25);
//   let person4 = new Person("Aliceeee", 15);


//   // 5 

//   let animal = {
//     type: 'Mammal',
//     makeSound(){
//         console.log('Some generic animal sound');
//     }
//   };

//   let dog = Object.create(animal);
//   dog.breed = 'Golden Retriever';
//   dog.makeSound();
//   console.log(dog.type);

//   // 6

//   class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         return 'Hello my nam is ${this.name}';
//     }
//   }
//   let person1 = new Person("Alice", 67);
//   console.log(person1.greet());

// 7

// const config = Object.freeze({
//     theme: "dark",
//     version: "1.0.1.1"
// });

// config.theme = 'Light';
// console.log(config.theme);





// function talaba(name, age) {
//     this.name = name;
//     this.age = age;
// }


// talaba.prototype.sayhello = function() {
//     console.log("Salom meni ismim "+this.name+", yoshim "+this.age+" da");
// };

// let talaba1 = new talaba("Jabbor", 67);
// let talaba2 = new talaba("bahrom", 64);
// talaba1.sayhello();
// talaba2.sayhello();


// class Shaxs {
//     constructor(ism) {
//         this.ism = ism;
//     }
//     salomber() {
//         console.log(`Salom ismim ${this.ism}`);
//     }
// }

// class Student extends Shaxs {
//     constructor(ism, kurs) {
//         super(ism);
//         this.kurs = kurs;
//     }

//     uqi() {
//                 console.log(`${this.ism} hozir ${this.kurs}-kurs talabasi`);
//     }
// }

// let talaba = new Student("Hoji", 2);
// talaba.salomber();
// talaba.uqi();      




// Practice 1

const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

let topStudent = "";
let maxAvg = 0;

for (let i = 0; i < students.length; i++) {
  let s = students[i]; 
  let sum = 0;
  
  for (let j = 0; j < s.scores.length; j++) {
    sum += s.scores[j]; 
  }
  
  let avg = sum / s.scores.length;
  
  if (avg > maxAvg) {
    maxAvg = avg;
    topStudent = s.name;
  }
}
console.log(topStudent + " has the highest average: " + maxAvg);



// CHALLENGE 2: Shopping Cart

const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

let totalCart = 0;
for (let i = 0; i < cart.length; i++) {
  totalCart += cart[i].price * cart[i].quantity;
}

if (totalCart > 1000) {
  totalCart = totalCart - (totalCart * 0.1); // 10% chegirma
}
console.log("Total Price: $" + totalCart + " (after discount)");



// CHALLENGE 3: Product Inventory

let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

let foundProd = null;
for (let i = 0; i < products.length; i++) {
  if (products[i].name === "Laptop") {
    foundProd = products[i];
    break;
  }
}
console.log("Found:", foundProd.name);


// CHALLENGE 4: Social Media Post

const posts = [
  { author: "Alice", likes: 100, shares: 5, comments: [1, 2] },
  { author: "Bob", likes: 200, shares: 10, comments: [1] }
];

let totalEng = 0;
for (let i = 0; i < posts.length; i++) {
  totalEng += posts[i].likes + posts[i].shares + posts[i].comments.length;
}
console.log("Total Engagement: " + totalEng);


// CHALLENGE 5: Sports Leaderboard

const teams = [
  { name: "Team A", points: 15 },
  { name: "Team B", points: 18 }
];

let best = teams[0];
for (let i = 0; i < teams.length; i++) {
  if (teams[i].points > best.points) {
    best = teams[i];
  }
}
console.log("Best Team: " + best.name);


// CHALLENGE 6: Warehouse Stock

const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 }
];

function getStock(cat) {
  let s = 0;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].category === cat) {
      s += inventory[i].stock;
    }
  }
  return s;
}
console.log("Electronics Total: " + getStock("Electronics"));