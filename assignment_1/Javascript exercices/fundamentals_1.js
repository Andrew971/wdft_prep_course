/*
from here , i will be writting the exercices from the lessons. 
*/

/* EXERCICE 1 */

var name ="SORDIER Andrew";
console.log("Hello ",name);

/* EXERCICE 2 */

var x = 1125;
var c = x%2;
console.log(c);

/* EXERCICE 3 */

var a= true;
var b= false;
var c= true;

console.log(a||b||c);

/* EXERCICE 4 */

var a= true;
var b= false;
var c= true;

console.log(a&&b&&c);

/* EXERCICE 5 */

var answer1= 10 - 3 * 5/4 + 202 % 3;
var answer2= 10 - (3 * (5/4) + (202 % 3));

console.log("Answer 1 is "+answer1,"and","answer 2 is "+answer2);
//Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-). 
//And (as in school mathematics) the precedence can be changed by using parentheses
//When using parentheses, the operations inside the parentheses are computed first.

/* EXERCICE 6 */

String("12");
parseInt("113");
parseFloat("1.12356");

var x= parseInt("hello world");

console.log(x);
// "hello world" is not a number so it return undefined 