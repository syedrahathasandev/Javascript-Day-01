// Day 1 – Variables, Data Types, Operators 
// Concepts 
// ● let vs const 
// ● primitive vs reference types 
// ● arithmetic & comparison operators 
// Practice 
// Stretch 
// ● Build: Temperature Converter (Celsius ↔ Fahrenheit) 
// ● Build: Simple BMI Calculator

// ● let vs const 
// let er value ke change kora jay but const value ke change kora jay na.

// let fullName = 'Syed Rahat Hasan';
// let fullName2 = 'Syed Rahat Hasan';
// console.log(fullName);
// console.log(fullName2);

// const er value ke change kora jay na.

// const fullName = 'Syed Rahat Hasan';
// const fullName2 = 'Syed Rahat Hasan';
// console.log(fullName);
// console.log(fullName2);

// ● primitive vs reference types 

// ● Primitive data type 

// # Primitive data types have a fixed size in memory. 
// # A number occupies eight bytes of memory, and a Boolean value can be represented with only one bit.
// # If each JavaScript variable reserves eight bytes of memory, the variable can directly hold any primitive value.

// ● String ● Number ● Boolean ● undefined ● null

// let num = 10;
// let newNum = num;
// num =50;
// console.log("The value of newNum is: ", newNum);
// console.log("The value is num is: ", num);

// ● Reference data type
// Reference types do not have a fixed size in memory.
// So, their values cannot be stored directly in the eight bytes of memory associated with each variable.
//  ● Object  ● Array  ● Function       

let person = {name:"Syed Rahat Hasan"};
let newPerson = person;
person.name = "Syed Rahat Hasan";
console.log("The value of newPerson is: ", newPerson);
console.log("The value is person is: ", person);