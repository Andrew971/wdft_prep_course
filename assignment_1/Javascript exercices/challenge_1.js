/*Match the string "BrainStation" when given the strings 
"I am a BrainStation student" and "I am a student." 
What is the resulting value? (HINT: Look at .search()).
Replace the string "BrainStation student" with the string "Junior Developer" 
when provided the string "I am a BrainStation student." (HINT: Look at .replace()).*/


var a= "I am a BrainStation student and i am student";

var x= a.search("BrainStation")

console.log(x);

var c= "I am a BrainStation student"
var y = c.replace("BrainStation student","Junior Developer");

console.log(y);


