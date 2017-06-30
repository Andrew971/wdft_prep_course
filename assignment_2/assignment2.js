/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
var i = 0;
for (var i = 0; i < 101;i) {
    console.log(i);
    i = i + 1;
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
//première methode
var a = "";
for (counter=0; counter < 8; counter++) {
    console.log(a);
    a = a + "#";
}
//deuxième methode
var b = "#";
for(i = 1; i < 8; i++){
    console.log(b.repeat(i));
}