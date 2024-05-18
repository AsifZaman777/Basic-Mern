

//datatypes 3 types

/*
var -> hoisting possible, redeclaration possible, reinitialization possible  
let -> hoisting not possible, redeclaration not possible, reinitialization possible
const -> hoisting not possible, redeclaration not possible, reinitialization not possible
*/


// redeclaration
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




