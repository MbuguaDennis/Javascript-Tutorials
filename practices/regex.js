// starting with regular expressions

// Lesson1:Using the test method test();

let myString = "freeCodeCamp";
let myRegex = /Code/;
// testing the string
console.log(myRegex.test(myString));
// the test returns true since the word Code is found in the string

// Lesson2 
// Matching uppercase letters never match from lowercase letters

// lesson 3- matching patterns with different possibilities
// Use the alternation OR | sign

// example
let string1 = "You should have said, yes or no before proceeding";
let myRegex1 = /before|said|proceed/;
const answer1= myRegex1.test(string1);
console.log(answer1); 
// returns true because one of these are found.

// lesson4-Ignore case while matching
// we use the  flag i

let string2 = "You should have said, yes or no before proceeding";
let myRegex2 = /proceedinG|beFore/i;
const answer2= myRegex2.test(string2);
console.log(answer2);


// Lesson5- Extracting with match() method.
// the match method returns the matched patterns
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));

// example 

let myString3 = "I have been learning javascript the last 3 months";
let myRegex3= /learning/;
const result3 = myString3.match(myRegex3);
console.log(result3);

// Lesson5 - Return more than the first match
// we use the global flag g
let testStr = "Repeat, Repeat, Repeat";
let ourRegex4 = /Repeat/g;
 let answer4= testStr.match(ourRegex4);
 console.log( `returned answer is ${answer4}`);


//  Lesson 6:Match anything with . wildcard
// The wildcard matches any character
let testStr6 = "I am currrently working  on my PROJECT";
let ourRegex6 = /cu|wo|pro/gi;
 let answer6= testStr6.match(ourRegex6);
 console.log( `returned answer is ${answer6}`);

//  Lesson 7:Matching single character with multiple possibilites
// we use character classes.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// example
let myString7 = "There were Coming and codinG while Caring, caging and chaNging";
let myRegex7 = /c[a-z]i/gi;
let answer7 = myString7.match(myRegex7);
console.log(answer7);


// Lesson 8:
// Match single characters not specified
// create a set of characters that you do not want to match

// we use the negated ^ character set
/*
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match
*/

// example

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex. 


let quoteSample = "3 blind mice.";
let myRegex10 = /[^0-9a,e,i,o,u]/; // Change this line
let result = quoteSample.match(myRegex10); // Change this line

console.log(result);

// Lesson 11:
// Match characters that occur one or more times
// We use the character +
// the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

// Task
/*You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign. */
let difficultSpelling = "Mississippi";
// Change this line
let myRegex11 = /s+/g; 

let result11 = difficultSpelling.match(myRegex11);  
console.log(result11);

// Lesson 13:Match Characters that Occur Zero or More Times
// we use the character set *
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

console.log(goRegex.test(soccerWord));


// Lesson 15:Find characters with Lazy matching
// a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern

let myString15 = "titanic";
let myRegexTest15 = /t[a-z]*i/gi;
let result15 = myString15.match(myRegexTest15);
console.log(`My greedy result is ${result15}`);


// you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// LAZY MATCHING
let myString16 = "titanic";
let myRegexTest16 = /t[a-z]*?i/;
let result16 = myString16.match(myRegexTest16);
console.log(`My lazy matching result is ${result16}`);



// Test practice

// A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

// solution:

let Criminals = /C+/;
// This finds one or more criminals that are following each other

// Lesson 19:Quantity specifiers
// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);




















