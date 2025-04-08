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


//let score = "hitesh"

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
// console.log("1" + 2 + 2);            //122
// console.log(1 + 2 + "2");            //32         goto link for study 

//console.log( (3 + 4) * 5 % 3);

//console.log(+true);              //1
// console.log(+"");                 //0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2         //4
// console.log(num1)

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


//  lect 8  comparison in javascipt______________________________________________________________________________________________
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//comparison are not consistent bcz null sometime give value nan sometimes 0 so inconsistcy in js so avoid this kind of comprisn
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// //also this
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// // === 

//console.log("2" === 2);



// lect 9 datatypes summ________________________________________________________________________________________________
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);


//typeof nono primitive datatype
// typeof {}         // "object"
// typeof []         // "object"
// typeof function(){}  // "function"
// typeof new Date() // "object"


// https://262.ecma-international.org/5.1/#sec-11.4.3

//commit lect 10________________________________________________________stack and heap_______________



//primitive datatype are storedin (stack)        and in heap all noo primitive datatype stored


//lect11 ____________________________________________________________String ______________________
// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");              //not good way

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);          //do this way

//const gameName = new String('hitesh-hc-com')                                  //another way of declaring string

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)        //not working bcz of negative value
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

//console.log(gameName.split('-'));

//__________________________________lect12__________________numberand maths________________________________________

// const score = 400
//  console.log(score);

// const balance = new Number(100)               //this give output as[number:100]  with proper datatype
//  console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966

// // console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//this convert 1000000 this confusing with 0 no into 10 000 000 format indan format

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 //console.log(Math);
// console.log(Math.abs(-4));           //gives absoulute value means convert -values into positve only
// console.log(Math.round(4.6));    //this captures nearest value of this value big or small (full value)
// console.log(Math.ceil(4.2));   //this gives only topest complete value means 5 
// console.log(Math.floor(4.9));     //this gives only bottoms first compler value means 4
// console.log(Math.min(4, 3, 6, 8));  //finds min value from arreay
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());                //gives us random vlaue for between 0 to 1 like 0.1,0.2 ,0.5  but if we  want value
console.log((Math.random()*10) + 1);        //between 1 to 10 for sudo game then use this
// console.log(Math.floor(Math.random()*10) + 1);    //after multiplying it in some case 0.1*10 gives 0 in that case we want to 
                                                    //avoid it so +1 it gives result 1

 //but in some cases we want values in particular range the we use min and max
// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// ______________________________________________________date and time__________________lect13_____________________


// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
