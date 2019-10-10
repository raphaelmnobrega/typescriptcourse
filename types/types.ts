// string
let name: string = 'John'
console.log(name)

// numbers
let age: number = 27
age = 27.5
console.log(age)

// boolean
let hasHobbies: boolean = false
console.log(hasHobbies)

// Explicity types
let myAge : number
//let myAge : any
myAge = 27
console.log(typeof myAge)
//myAge = 'I am 27 years old'
//console.log(typeof myAge)

// array
let hobbies: any[] = ["Cooking", "Sports"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

// tuples
let address: [string, number] = ["Main Street", 99]
console.log(address)

// enums
enum Collors{
    Grey, //0
    Green = 100, //100
    Blue 
}

let myCollor: Collors = Collors.Green
console.log(myCollor)
console.log(Collors.Blue)

// any
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', year: 2019 }
console.log(car)

// functions
function returnMyName(): string { //must return a string
    return name
}

console.log(returnMyName())

function sayHi(): void {
    console.log('Hi!')
}

sayHi()

function math(numA: number, numB: number): number {
    return numA * numB
}

console.log(math(4.7,3))