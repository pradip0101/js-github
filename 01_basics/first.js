console.log("starting")

const data=123;  //const is used to create const in js means we cant change it once we declare it
let  bankId="12345"; //this is most use in nowdays  //if we declare inside some function then worked only that fun scope
var bankname="fs";   //this is less used becasuse of its scope it can be changable in any scope (means if we declare it outside of function 
    //and use same name var in some fun then it changed and our var name outside of fun are also changed)//  so every time var name
//  changed this is not good


// 1. Primitive Data Types (Single values) in javascript                                     
 //types                              //stores                                                                         //examples

//String	                    Text	                                                              "hello",world'
// Number	                    Numbers (integers or decimals)	                                       10, 3.14
// Boolean	                    True or false	                                                       true, false
// undefined	                Variable declared but no value yet	                                   let x; → x is undefined
// null	Empty or                 nothing	let x = null
// BigInt	                    Very large numbers	                                                   12345678901234567890n
//Symbol	                    Unique values (used in advanced cases)	Symbol("id")    //we study this in react


// 2. Non-Primitive Data Types (Collections)
// Type	                         Description	                                                        xample
// Object	                     Key-value pairs	                                                     name: "Ram", age: 21 }
// Array	                     List of values	                                                        [1, 2, 3] or ["a", "b"]
// Function	                     Reusable block of code	function greet() {}






//examples of datatypes in js
// let name = "Alice";         // String
// let age = 25;               // Number
// let isHappy = true;         // Boolean
// let phone;                  // Undefined
// let city = null;            // Null
// let bigNumber = 12345678901234567890n; // BigInt
// let id = Symbol("id");      // Symbol

// let person = { name: "Alice", age: 25 }; // Object
// let colors = ["red", "green"];           // Array
// function greet() { console.log("Hi!"); } // Function










//lect 6 datatypes conversion 


let score = "hitesh"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = "hitesh"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "hello"
// let str2 = " hitesh"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//console.log( (3 + 4) * 5 % 3);

// console.log(+true);              //true
// console.log(+"");                 //0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2         //4
// console.log(num1)

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion