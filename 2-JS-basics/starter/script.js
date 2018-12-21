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
// age = 'twenty eight';
// job = 'driver';

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


// If/Else Statements
var civilStatus = 'no cat';

if (civilStatus === 'has cat') {
    console.log(firstName + ' haz a cat!')
} else {
    console.log(firstName + ' is not with cat right meow..');
} 


if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than john's.`)
} else {
    console.log(`John's BMI is higher than Mark's`);
}

// BOOLEAN LOGIC

if (age < 13) {
    console.log(`${firstName} is a boy`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager.`)
} else if (age > 20 && age < 30) {
    console.log(`${firstName} is a young man`);
} else {
    console.log(`${firstName} is a man.`);
}

// the ternary operator
// allows us to write if/else statement in one line
age >= 18 ? console.log(`${firstName} drinks beer`) : console.log(`${firstName} drinks juice`);

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch statement
// sometimes a switch statement looks a lot cleaner than if/else statements
switch (job) {
    case 'Web Developer':
        console.log(`${firstName} slings divs`);
        break;
    case 'driver':
        console.log(`${firstName} drives an uber in lisbon.`);
        break;
    case 'designer':
        console.log(`${firstName} designs beautiful websites.`);
        break;
    default:
        console.log(`${firstName} does something else.`);
        break;
}

switch (true) {
    case age < 13:
        console.log(`${firstName} is a boy`);
        break;
    case age >=13 && age < 20:
        console.log(`${firstName} is a teenager.`);
        break;
    case age >= 20 && age < 30: 
        console.log(`${firstName} is a young man`);
        break;
    default:
        console.log(`${firstName} is a man.`);
        break;
}


// truthy and falsy values and quality operaters

//  falsy values: undefined, null, 0, '', NaN
//  truthy values: NOT falsy values

var height;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// equality (type coercion) operators
if (height == 23) {
    console.log('The == operator does type coercion!');
}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnTeamScore = 89 + 120 + 103;
var markTeamScore = 116 + 94 + 123;
var maryTeamScore = 97 + 134 + 105;
var getAverageScore = (score) => {
    score / 3;
    return score;
}

var johnAverage = getAverageScore(johnTeamScore);
var markAverage = getAverageScore(markTeamScore);
var maryAverage = getAverageScore(maryTeamScore);
console.log(johnAverage, markAverage, maryAverage)

if (johnAverage > markAverage && johnAverage > maryAverage ) {
    console.log(`John's team won on average`)
} else if (markAverage > johnAverage && markAverage > markAverage) {
    console.log(`Mark's team won on average`);
} else if (maryAverage > johnAverage && maryAverage > markAverage) {
    console.log(`Mary's team won on average`);
} else {
    console.log(`there was a draw`);
}

// functions 

function calculateAge(birthYear) {
    return 2018 - birthYear
}

var ageCaroline = calculateAge(1990);

console.log(ageCaroline)

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year)
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearsUntilRetirement(1990, 'Caroline')

// FUNCTION STATEMENTS AND EXPRESSION

// function declaration
function whatSomeonedoes(job, firstName) {

}

// function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + 'teaches kids how to code';
            //when we hit return keyword the function finishes meaning we don't need a break
        case 'driver':
            return firstName + 'drives a cab in Lisbon';
        case 'designer':
            return firstName + 'designs beautiful websites';
        default:
            return firstName + 'does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Caroline'));

// ARRAYS
//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
//mutate array data
names[1] = 'ben';
names[names.length] = 'mary';
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'teacher',]
john.push('blue');
john.unshift('Mr.');
john.pop()
john.shift();
console.log(john)
//get to know position of item
//if item is not in the arry we'll receive -1 value
    //good to test if item is in array
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);