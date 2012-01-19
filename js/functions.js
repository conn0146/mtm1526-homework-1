// JavaScript Document


var letter;

while(!letter){
letter = prompt('Type in a letter');
}

for(var i = 1; i <= 10 ;i++){
for(var j = 1; j <= i; j++){

document.write(letter);
}
document.write('<br>');
}