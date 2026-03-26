// challange 1

// function first(arr, n)
// {
//     if(n == undefined){
//         return arr[0];
//     }
//     else if(n < 0){
//         return [];
//     } else if (arr.length === 0){
//         return [];
//     }
//      return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// challange 2

// function last(arr, n){
//     if(n == null)
//     {
//          return arr[arr.length - 1];
//     } else if (n > arr.length) {
//         return arr;
//     }
//      return arr.slice(arr.length - n);
// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// challange 3

//  myColor = ["Red", "Green", "White", "Black"];
//  let colors = myColor.join(",");

//  console.log(colors)


// challange 4

// let numbers = "025468"
// let newNumbers = ""
// for(var i = 0; i < numbers.length; i++){
//     newNumbers += numbers[i];
    
//     if (i < numbers.length-1)
//     {
//          newNumbers += "-"
//     }
// }

//   console.log(newNumbers);

// // challange 5

//   let text = "robin singh"

// let words = text.split(" ")
// let newText = ""

// for (let i = 0; i < words.length; i++) {
//     let first = words[i][0].toUpperCase()
//     let other = words[i].slice(1)

//     newText = newText + first + other + " "
// }

// console.log(newText)

// challange 6

// let text = "webbrain"
// let result = ""

// for (let i = 0; i < text.length; i++) {

//     if (i % 2 == 1) {
//         result = result + text[i].toUpperCase()
//     } else {
//         result = result + text[i]
//     }

// }

// console.log(result)


// challange 7

// let text = "javascript"
// let result = ""

// for (let i = text.length - 1; i >= 0; i--) {
//     result = result + text[i]
// }

// console.log(result)


// // challange 8
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
// let o = ["th","st","nd","rd"]

// for (let i = 0; i < color.length; i++) {

//     let number = i + 1
//     let ending = o[0]

//     if (number == 1) {
//         ending = o[1]
//     }
//     else if (number == 2) {
//         ending = o[2]
//     }
//     else if (number == 3) {
//         ending = o[3]
//     }

//     console.log(number + ending + " choice is " + color[i])
// }


// // challange 9

// let array1 = [1,0,2,3,4]
// let array2 = [3,5,6,7,8,13]

// let result = []

// let maxLength = Math.max(array1.length, array2.length)

// for (let i = 0; i < maxLength; i++) {

//     let a = array1[i] || 0
//     let b = array2[i] || 0

//     result.push(a + b)
// }

// console.log(result)