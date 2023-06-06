/*  1. Declare a function printFullName and it prints out your full name. */

// let name = "Amil";
// let surname = "Musaevi";

// let printFullName = function () {
//     return `${name} ${surname}`;
// };
// console.log(printFullName());





/* 2. Declare an arrow function printFullNameWithParam and now it takes firstName,
 lastName as a parameter and returns your full name. */

// let printFullNameWithParam = (fName, Lname) => {
//     let fullName = `${fName} ${Lname}`;
//     console.log(fullName);
// };
// printFullNameWithParam("Amil", "Musaevi");




 
/* 3. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
 Write a function that calculates perimeterOfRectangle. */

// let width = parseFloat(prompt("PLEASE ADD RECTANGLE'S WIDTH"));
// let length = parseFloat(prompt("PLEASE ADD RECTANGLE'S LENGTH"));

// function perimeterOfRectangle() {
//     let perimeter = 2 * (width + length);
//     console.log("perimeterOfRectangle", perimeter);
//     return perimeter;
// }
// perimeterOfRectangle();







/* 4. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
 Write a function that calculates BMI.
  BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight, or obese based on the information given below.
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal Weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

// let height = parseFloat(prompt("PLEASE ADD YOUR HEIGHT in m"))
// let weight = parseFloat(prompt("PLEASE ADD YOUR WEIGHT in kg"))

// function calculateBmi () {
//   let bmi = weight/(height*height)
//   alert (bmi)
//   if(bmi<18.5){
//     alert ('you are Underweight')
//   }
//   else if(18.5<bmi && bmi<24.9){
//   alert ('you are Normal Weight')
//   }
//   else if(25<bmi && bmi<29.9){
//     alert ('you are Overweight')
//   }
//   else if(bmi>30){
//     alert ('you are obese')
//   } 

// }
// calculateBmi()







/* 5. Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.
pow(3, 2) -> 3*3 = 9
pow(3, 3) -> 3 * 3 * 3 = 27
pow(1, 100) -> 1 * 1 * ...* 1 = 1 */


/* method 1 */
// let count = (number,once) =>{
//     let result = 0;
//       result=number**once;
//      alert (result)
//         return result
// }

// let number = prompt('what is number ?')
// let once = prompt ('what is once')
// count(number,once)
 

/* method 2 */
// let calculate =(number,once) =>{
//    let result=Math.pow(number,once)
//     alert (result)
//     return result;
// }
// calculate(2,3)


/* method 3 */
// let calculate = function (number,once){
//   let result=1
//   for(let i=0; i<once; i++){
//     result*=number;
//   }
//   alert (result)
//   return result;
// }
// let number = prompt('what is number ?')
// let once = prompt ('how many once')

// calculate(number,once)


/* method 4 */
// let calculate = function (number,once){
//   let result=number
//   for(let i=1; i<once; i++){
//     result*=number;
//   }
//   alert (result)
//   return result;
// }

// let number = prompt('what is number ?')
// let once = prompt ('how many once')

// calculate(number,once)


