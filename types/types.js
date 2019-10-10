"use strict";
// string
var name = 'John';
console.log(name);
// numbers
var age = 27;
age = 27.5;
console.log(age);
// boolean
var hasHobbies = false;
console.log(hasHobbies);
// Explicity types
var myAge;
//let myAge : any
myAge = 27;
console.log(typeof myAge);
//myAge = 'I am 27 years old'
//console.log(typeof myAge)
// array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuples
var address = ["Main Street", 99];
console.log(address);
// enums
var Collors;
(function (Collors) {
    Collors[Collors["Grey"] = 0] = "Grey";
    Collors[Collors["Green"] = 100] = "Green";
    Collors[Collors["Blue"] = 101] = "Blue";
})(Collors || (Collors = {}));
var myCollor = Collors.Green;
console.log(myCollor);
console.log(Collors.Blue);
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', year: 2019 };
console.log(car);
// functions
function returnMyName() {
    return name;
}
console.log(returnMyName());
function sayHi() {
    console.log('Hi!');
}
sayHi();
function math(numA, numB) {
    return numA * numB;
}
console.log(math(4.7, 3));
