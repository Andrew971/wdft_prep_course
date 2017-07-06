//magic eightball with if else statement 

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
if (choice == 1) {
    console.log("You are ugly");
}
else if (choice == 2){ 
    console.log("You are beautiful");
}
else {
console.log(reply);
}
    console.log("Your ball was the number", choice);

}

ask();

//with switch statement

var numberofreplys1 = 2;
function ask1(){
    var choice1 = Math.floor(Math.random() * numberofreplys1 +1);
    var reply1 = 'You need to make some options using if/else'
switch(choice1) {
    case 1:
       console.log("You are ugly");
        break;
    case 2:
    console.log("You are beautiful");
        break;
    default:
console.log(reply1);
}
    
console.log("Your ball was the number", choice1e);

}

ask1();

