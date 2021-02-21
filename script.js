/*
let js = 'amazing';
if (js === 'amazing') alert('Javascrip is FUN!');

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

// Values & Variables              -> assignements-js-fundmentales : Lecture Values and Variables
let country = "Hong Kong";
let continent = "Asia";
let population = 7000000;
console.log(country);
console.log(continent);
console.log(population);

// Video 12: Data Type             <=>              Vidéo: 12
let javaIsFun = true;
console.log(javaIsFun);

//console.log(typeof true);
console.log(typeof javaIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javaIsFun = 'YES!';
console.log(typeof javaIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
//Répondre: "objet" qui est un bogue et ce n'est pas corrigé pour des raisons d'hértages. Mais "null" bien sûr n'est pas un obbjet.
//Cela devrait renvoyer "null" tout comme le type de (typeof) retour "undefined".


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* Coding Challenge #1                           <=>               Video 16
// Ariane did 2 separated datas.
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
const markBMIData1 = markMass1 / markHeight1 ** 2;
const johnBMIData1 = johnMass1 / (johnHeight1 * johnHeight1);  //johnHeight1 ** 2 === (johnHeight1 * johnHeight1)
const markHigherBMI1 = markBMIData1 > johnBMIData1;

console.log(markBMIData1, johnBMIData1, markHeightBMI1);


const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markBMIData2 = markMass2 / (markHeight2 * markHeight2);
const johnBMIData2 = johnMass2 / (johnHeight2 * johnHeight2);
const markHigherBMI2 = markBMIData2 > johnBMIData2

console.log(markBMIData2, johnBMIData2, markHigherBMI2);
*/
/* Authur's way
//const markMass = 78;
//const markHeight = 1.69;
//const johnMass = 92;
//const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMIData = markMass / markHeight ** 2;
const johnBMIData = johnMass / (johnHeight * johnHeight);  //johnHeight ** 2 === (johnHeight * johnHeight)
const markHigherBMI = markBMIData > johnBMIData;

console.log(markBMIData, johnBMIData, markHigherBMI);
*/


/* Video 17: Template Literals : `` bactex ? (In template literals, we can only insert expression, not statement.)                <=>   17 ***
const firstName = "Ariane";
const job = "coder";
const birthYear = 1991;
const now = 2021;
const age = now - birthYear;
const Ariane = "I'm " + firstName + ", " + age + " years old" + ", " + job + ".";
console.log(Ariane);

const newAriane = `I'm ${firstName}, ${age} years old, ${job}.`;
console.log(newAriane);

console.log(`It's a regular string.`);
console.log(`This is
a regular
string.`)
*/

//Coding Challenge #2                           <=>             Vidéo 19
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

//const markMass = 95;
//const markHeight = 1.88;
//const johnMass = 85;
//const johnHeight = 1.76;

const markBMIData = markMass / markHeight ** 2;
const johnBMIData = johnMass / (johnHeight * johnHeight);  //johnHeight ** 2 === (johnHeight * johnHeight)
console.log(markBMIData, johnBMIData);

if (markBMIData > johnBMIData) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${markBMIData}) is higher than John's (${johnBMIData})!`);
} else {
    console.log("John's BMI is higer than Mark's!")
    console.log(`John's BMI (${johnBMIData}) is higher than Mark's (${markBMIData})!`);
}
*/


/*  ###########################################################################################################
// Vidéo 20: Conversion and Coércion : JS can convert number, string, booléan, but not undefined, null.
// Conversion String to Number
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //23, 23  **Number() : convert string to number.
console.log(Number(inputYear) + 18);  //2009.  Number N should be in capital letter.

console.log(Number('Jonas')); //Nan
console.log(typeof NaN);      //Number

// Conversion Number to String
console.log(String(23), 23);    //String S should be in capital letter.

// ***Coércion : when opérator is involved in 2 valeurs of different types
console.log('I am ' + 23 + ' years old.'); // when there is an operator between a string and a number. The + operator will convert the Number to 'String'. It's because JS has coérction.
console.log('I am ' + String(23) + ' years old.'); //Otherwise we have to do it manuely in this way.
console.log('I am ' + '23' + ' years old.');
console.log(`I am 23 years old.`); //***In template literal, it's same to convert the Numbet to 'String'.

console.log('23' - '10' - 3); //10. It's Number.  ***The - operator convert the String to 'Number'.
console.log('23' + '10' + 3); //23103. It's String. ***The + operator will convert the Number to 'String'.
console.log('23' * '2'); // 46. It's converted to 'Number'. ***It's because the only way that * can work.
console.log('23' / '2'); // 11.5 It's convertd to 'Number'.  ***It's because the only way that / can work.
console.log('23' > '18'); // true. ***For the logical operator, JS convert string to 'Number'.

let n = '1' + 1; // '11'
n = n - 1;
console; log(n); //10.

2 + 3 + 4 + '5' // "95";
'10' - '4' - '3' - 2 + '5' // "15"
*/
/*
// Vidéo 21: Truthy and Falsy Values
//In JS there are 5 falsy values : 0, ''(empty string), undefined, null, NaN(Not a Number) when they are tried to be converted to a boolean.
// Any number (except 0), any string (except empty string) will be true values.
console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean('Jonas')); //True
console.log(Boolean({})); //Empty objet.  True
console.log(Boolean('')); //False

const money = 0;
if (money) {                              // Here is a falsy value.
    console.log("Don't spend it all ;)");
} else {                                  // else executed.
    console.log('You should get a job!'); // This statement shown.
}

let height;    //OR let height = 0; height is undefined because it isn't assigned any value OR 0. Whe try to coverted to a boolean, it's a falsy value.
if (height) {
    console.log('YAY! Height is defined')
} else {                                   // else executed.
    console.log('Height is UNDEFINED')     // This statement shown.
}
*/
/*
// Video 22 : Equality Operators: == vs ===
const age = 18;  // const age = '18', only loose statement will be shown.
if (age === 18) console.log('You just became an adult :D (strict)'); //***If there is only 1 line, you don't need to put {}
if (age == 18) console.log('You just became an adult :D (loose)');
//*** Clean code: use strict Equality Operator ===. In case, use coercion manuel (convert to String or Number firstly) before compare. Avoid == that will cause bug, confusing or problem.

18 === 18  // true ; both side values are strictly same, and the === equal does not perform coercion
18 === 19  // false
'18' == 18 // true because coercion that string '18' is converted to Number 18
'18' === 18 // false ; the === equal does not perform coercion

//const favourite = prompt("What's your favourite number?");  // If input 23 which will be stored in const favourite
//console.log(favourite);  // 23
//console.log(typeof favourite); // string

//if (favourite == 23) { // '23' == 23, '23' is converted to 23 number
//    console.log('Cool! 23 is an amazing number!') // This statement shown.
//}

//if (favourite === 23) {  // '23' === 23, false
//    console.log('Cool! 23 is an amazing number!') // This statement did not show.
//}

// We have to do in the following way :
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);  // 23 ; 22 === 23 -> False
console.log(typeof favourite); // Number
if (favourite === 23) {  // 23 === 23, true
    console.log('Cool! 23 is an amazing number!') // This statement show.
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?') // !== strict not Equality Operator  // != loose not equality operator
*/

// Coding Challenge # 3                      <=>            Video 25 
/*const averageDolphine = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;
console.log("Dolphine has " + averageDolphine, "Koalas has " + averageKoalas);
// 2.
if (averageDolphine > averageKoalas) {
    console.log("Dolphine wins the trophy!")
} else if (averageDolphine < averageKoalas) {
    console.log("Koalas wins the trophy!")
} else {                                      // else if (averageDolphine === averageKoalas)
    console.log("They have the same average score!")
}
*/
/*Bonus 1
const averageDolphine = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 123) / 3;
console.log("Dolphine has " + averageDolphine, "Koalas has " + averageKoalas);

if (averageDolphine > averageKoalas && averageDolphine >= 100) {
    console.log("Dolphine wins the trophy!")
} else if (averageKoalas > averageDolphine && averageKoalas >= 100) {
    console.log("Koalas wins the trophy!")
} else {
    console.log("No team wins the trophy!")
}
*/
/*Bonus 2
const averageDolphine = (97 + 112 + 89) / 3;
const averageKoalas = (109 + 95 + 94) / 3;
console.log("Dolphine has " + averageDolphine, "Koalas has " + averageKoalas);
if (averageDolphine > averageKoalas && averageDolphine >= 100) {
    console.log("Dolphine wins the trophy!")
} else if (averageKoalas > averageDolphine && averageKoalas >= 100) {
    console.log("Koalas wins the trophy!")
} else if (averageDolphine === averageKoalas && averageDolphine >= 100 && averageKoalas >= 100) {
    console.log("Both team have equal score, win the trphy!")
} else {
    console.log("No team wins the trophy!")
}
*/

/* 26. The Switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wedsnesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weeken :D');
} else {
    console.log('Not a valid day!')
}
*/

/* 27. Statements & Expressions ***
3 + 4   // It's an expression because it produces a value in JS.
1991    // It's an expression.
true && false && !false   // It's an expression because it produces a value of boolean.

// A statement is executed and which does not produce a value on itself.
// A statement (declaration) is just like a complete sentence, an expression is just like a word that make up a sentence.
// A programmation is sequence of actions.  And these actions are statements.
// In template literals, we can only insert expression, not statement.  ***

if (23 > 10) {
    const str = '23 is bigger' // '23 is bigger' is an expression, but the whole line is a statement. Every time something finish with ; it is a declaration. It's just like a complete sentence (with ;).
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old.`); //2037 - 1991 is an expression.
console.log(`I'm ${2037 - 1991} years old ${me}`); // me produces a value, 'Jonas' which is a string.  String is an expression.
*/

/* 28. The Conditional (Ternary) Operator *** is perfect to make quick decision which JS expect une expressioin just like in the template literal.
const age = 23;
age >= 18 ? console.log('I like to drink win') : console.log('I like to drink water');
// age >= 18; -> condition part
// console.log('I like to drink win')  -> if part (we expect positive answer)
// console.log('I like to drink water')  -> else part
// An operator always produce a value => an expression ***

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// in if / else statement, we need to declare the variable outside the block because any variable is declared inside the block, is not avaliable outside.
let drink2;    // declared variable here
if (age >= 18) {
    drink2 = 'wine';   // assigne inside the block
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
// => An operator and an expression always produce a value. In template literals, we can only insert expression (which produces a value). ***
*/

/* Coding Challenge #4
const bill = 275;
const tip1 = bill * 15 / 100;
const tip2 = bill * 20 / 100;
const tipAmount = bill >= 50 && bill <= 300 ? tip1 : tip2;
const total = bill + tipAmount;

console.log(`The bill was ${bill}, the tip was ${tipAmount}, and the total value ${total}`);

// Authur solution :
//const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
