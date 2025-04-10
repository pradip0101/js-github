//lect 21 _______________________________________________________________________Scope___________________________________

/*🔍 What is Scope in JavaScript?
Scope means where you can access a variable in your code.

Think of it like rooms in a house. If you put a toy (variable) in your room (a function), only people inside your room can play with it — not others outside.

Types of Scope:
Global Scope – available everywhere in your code.

Function Scope – available only inside a function.

Block Scope – available only inside { } (like in if, for, etc.) – this applies to let and cons*/





//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
    // console.log("INNER: ", a);
    
//}



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);

//______________________________________________________lect22____________________________________________________________
// ++++++++++++++++++ interesting ++++++++++++++++++

//if you declare fun this way then u can call it like beloww
// console.log(addone(5))

// function addone(num){
//     return num + 1
// }


//but if u declare fun like this  then u cant call like this it gives error
//addTwo(5)
//this type of func declaration called ad expression and js func are very powerfull bcz it holds fun,jsondata
//const addTwo = function(num){
//    return num + 2
//}


//___________________________________________________________________lect23____________________________----
//this refers to current class member or current scope
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



//In the browser, the global object is window.
//When this is used in the global scope, it refers to the window object so it shows all windows objects

//but In Node.js, the global object is global, not window. so it refers to empty objects

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);     //here thiswont work bcz this work only with objects not function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()


//this is a arrow function syntax
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//this is also arrow fun with implicit return means it implicitly return just we have to remove curly braces
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//this is same like above when we use this use parentheses its implicit return

// const addTwo = (num1, num2) => ({username: "hitesh"})  //also if we want to return object with arrow fun we have to wrap it in parethis


// console.log(addTwo(3, 4))

//lect ___________________________________________________________24_____________________________________________________________
// // Immediately Invoked Function Expressions (IIFE)


//this is named iife bcz this fun have some name

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })  ();                                         //here this fun called immedietly we have to use semicolon here to execute below fun


//this is iife but it have parameter in it and its a arrow iife
// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )  ('hitesh')                                          /so thats why we pass here argument to iife



//__________________________________________________lect26______________________________________controlflow___________________
// if
// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//we also write code this using , but this is unreadble not good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

//___________________________________________________________lect26________________________
// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN       //this all values consider as a false values

//truthy values  because of 0 is inside string and also false is written inside string
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

//let val1;
// val1 = 5 ?? 10                   //this print 5  
// val1 = null ?? 10                //this print 10 bcz of first is null that why in null,undefined case it print sec value
// val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20



//console.log(val1);

// Terniary Operator

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


//_____________________________________________________________lect 27_______________________loops__________________
// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
//     //console.log(element);
    
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
//let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }                                               //after 5 nothing is print in case of break

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

//_______________________________________________________lect28_______________________________________________

//let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

//let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);

//______________________________________________________lect29__________________________________________________
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive //values) may be used as either a key or a value.


//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object //is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in //insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that //is, there wasn't a key with the same value already in the map when set() was called)


// for of

// ["", "", ""]
// [{}, {}, {}]

//const arr = [1, 2, 3, 4, 5]

//for (const num of arr) {
    //console.log(num);
//}

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

//in this case we dont iterate objects we only iterates maps
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
//in this case__________________________________________lect29____________________________________________________
//learn how to applay loops on the objects we have for in loop
//const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`);
// }


//but can for in loop also work for array lets seee
// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
// }


//but in the casae of map its not iterablee__________
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//now see for each loop
// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//we also use index,array in this loop
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//below casae we have array with list of objects and we iterate using foreach loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )