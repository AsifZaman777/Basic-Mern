/*
var -> hoisting possible, redeclaration possible, reinitialization possible  
let -> hoisting not possible, redeclaration not possible, reinitialization possible
const -> hoisting not possible, redeclaration not possible, reinitialization not possible
*/


//redeclaration
var name = "John";
var name = "Doe";
console.log(name);


// reinitialization
var name = "John";
name = "Doe";
console.log(name);

// hoisting
id=100;
console.log(id);
var id;

// ctrl + / (multiline comment and uncomment)



// function scope for var 

var name = "mehedi";

function printName() {
    var name = "Saleh";
    console.log(name);
}
console.log(name);
printName();

function printName() {
    var name = "Saleh";
    console.log(name);
}





let name = "mehedi";
if(true){
    let name = "Saleh";
    console.log(name);
}
console.log(name);


const arr = [1,2,3,4,5];
console.log(arr);







