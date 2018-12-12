/************************
*Variable and Data Types*
************************/

var firstName = "Caroline";
// console.log(firstName);

// var lastName = "Pisano";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// // variable naming rules
// job = 'Web Developer';
// console.log(job);

/************************
*Variable Mutation and type coercion*
************************/

var firstName = 'Caroline';
var age = 28;
// tyoe coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Web Developer';
isMarried = false;

console.log(firstName + ' is a' + age + ' year old' + job + '. Is she married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

// alert(
//   firstName +
//     " is a" +
//     age +
//     " year old" +
//     job +
//     ". Is she married? " +
//     isMarried
// );


// var lastName = prompt('What is her last name?')
// console.log(firstName + ' ' + lastName);




// Basic Operators
// like functions written in a special way in JS
var now, yearCaroline, yeahMark
now = 2018;
ageCaroline = 28;
ageMark = 33;

// Math Operators
yearCaroline = now - ageCaroline;
yeahMark = now - ageMark;
console.log(yearCaroline);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical operators
var carolineOlder = ageCaroline > ageMark;
console.log(carolineOlder); 

// typeof operator
console.log(typeof carolineOlder);
console.log(typeof ageCaroline);
console.log(typeof 'Caroline is younger than Mark');
var x;
console.log(typeof x);


// Operator Precedence

var now = 2018;
var yearCaroline = 1990;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearCaroline >= fullAge;
console.log(isFullAge);

// grouping
var average = (ageCaroline + ageMark) / 2;
console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

// more operators
x = x *2;
//can be shortened to
x*= 2;
// this works for other BEDMASS operators like + - (there's more that can be found on the assignment operators table on MDN)
x = x + 1;
x += 1;
x++;

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
// storing weight value
var markMass = 80;
var johnMass = 90;
var markHeight = 1.63;
var johnHeight = 1.73;

const getBMI = (mass, height) => {
    var bmi = mass / (height * height);
    return bmi;
}

var markBMI = getBMI(markMass, markHeight);
var johnBMI = getBMI(johnMass, johnHeight);
console.log(markBMI, johnBMI);
var compareBMI = markBMI > johnBMI;
console.log(`Is Mark's BMI higher than John's ${compareBMI}`)
