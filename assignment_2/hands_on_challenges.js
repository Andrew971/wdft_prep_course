//exercice 1

var i = 0;
for (var i = 0; i < 101;i) {
    if(i%3==0 && i%5==0){
        console.log('fizzbuzz')
    }
    else if(i%5==0){
        console.log('fizz')
    }
    else if(i%3==0){
        console.log('buzz')
    }

    else {console.log(i)}
    i = i + 1;
}

//exercice 2
var size = 8;
var line="";
for (var x=1; x <= size; x++) {
    if (x%2 !== 0) {
        line+="";
        for (var y = 1; y <= size; y++) {
            line+="# ";
        }
        line+="\n";
    }
    else if (x%2 === 0) {
        line+=" ";
        for (var y = 1; y <= size; y++) {
            line+="# ";
        }
        line+="\n";
    }
}
console.log(line);


