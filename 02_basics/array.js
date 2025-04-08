// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
 //console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


//console.log(myArr)

// myArr.unshift(9)              // this add 9 to the first index

// myArr.shift()                  //this print originall array remvoing 9
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//  const newArr = myArr.join()

// console.log(myArr);          //this print array
// console.log( newArr);        //this print array in string format using,


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)      //this take slice between particular rane

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)       //this take all elements excepting elemets in the range we mention
// console.log("C ", myArr);             //above sentece for modifying myArr
// console.log(myn2);                  //this print elements from range 1 to 3

// lect 15 ___________________Array part 2________________________________________________________________________________

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)        //not good way to merge array

//console.log(marvel_heros);          //this print  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);    //this print flash  but not good practice

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                               //this is right way to merge

// const all_new_heros = [...marvel_heros, ...dc_heros]  //... is used to spred array means print single single valule in arry

//  console.log(all_new_heros);

//const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//const real_another_array = another_array.flat(Infinity)  //this flat convert above array into single aray
//console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))              //this check itis array or not
// console.log(Array.from("Hitesh"))                       //this conver Hitesh to array like 'H','i','t','e','s','h'
// console.log(Array.from({name: "hitesh"}))     //interesting this cant identify by how to make array key or value so it print[]

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));   //make array of value 100,200,300


//___________lect 16________________________objects_________________________________________________________________
// singleton
// Object.create

// object literals                //this are the ways of declaring objects in js
//Symbols are useful when you want to add unique property keys to an object without risking
//  property name collisions — especially in cases where multiple parts of the code interact with the same
//  object (like libraries, plugins, or frameworks).


// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",               //syntax is must if we use only mysym without bracket then it not represent symobol
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)                   //this isfirst way of fetch data from email but not goog
// console.log(JsUser["email"])                 //this is more effecient
// console.log(JsUser["full name"])             // in this case we cant fetch data by first way
// console.log(JsUser[mySym])      //fetch symbol 

//JsUser.email = "hitesh@chatgpt.com"                 //this is for replace emaill in above object
// Object.freeze(JsUser)                         //this is for anyone cant change info of jsuser object we use freeze
//JsUser.email = "hitesh@microsoft.com"           //now it cant modify bcz of freze
// console.log(JsUser);




// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//___________________________________lect 17___________________________________________________-
// const tinderUser = new Object()
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {                    //this is completly right we use nested object
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

//  console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                 //again thisis not good practice to merge object same array problem 
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //this is right way {} combine all abj value in {} this braces its a syntax

//const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [               //we also store objects in array
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));             //return all the keys
// console.log(Object.values(tinderUser));        //return only values
// console.log(Object.entries(tinderUser));        

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //this is used for check specific property (key) is present or not



//___________object destructure__________
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//course.courseInstructor               this is write way to print courinst but we also use follwing way

//const {courseInstructor} = course        //now we print course instructor var directlyy
//const {courseInstructor: instructor} = course       //not courseinstructr var val store in instructor varaible

//console.log(courseInstructor);
//console.log(instructor);



//now we ll learn fetch api
//this is json data json store data in object format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }



