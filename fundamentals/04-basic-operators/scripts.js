// Basic Operators

// Math operators
const now = 2037;
const ageJohn = now - 1991;
const ageSarah = now - 2018;
console.log(ageJohn, ageSarah);
console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);


// Concatonate strings
const firstName = 'John';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 25 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);


// Comparison operators
console.log(ageJohn > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);