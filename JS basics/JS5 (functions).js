/*
Function ->
Void Function 
 ---
function funcName(params)
{
    ///block of code
}

funcName(params)
 ---

Return Function


------JS function -----

Parameterized function
Non-parameterized function
Anonymous function
Arrow function(ES6)  (in python/ asp.net -> lambda function)
IIFE function (Immediately Invoked Function Expression)

*/

//void function -> function without return type.

function voidFunction() {
  function addVoid(a, b) {
    console.log(a + b);
  }

  addVoid(10, 20);
}
voidFunction();

//return function -> function with return type.

function returnFunction1() {
  function addReturn(a, b) {
    return a + b;
  }

  var res = addReturn(10, 20);
  console.log(res);
}
returnFunction1();

//Parameterized function
function parameterizedFunction() {
  function nested(passedFunc, num, passedFunc2) {
    passedFunc(num);
    passedFunc2(num);
  }

  function push(input_number) {
    console.log(`You have entered ${input_number}`);
  }

  function pop(input_number) {
    console.log(`You have removed ${input_number}`);
  }

  push(10);
  nested(push, 20, pop);
}
parameterizedFunction();

// anonymous function
function anonymousFunction() {
  var anonymous = function () {
    console.log("I am anonymous function");
  };
  anonymous();
}
anonymousFunction();

// arrow function
function arrowFunction() {
  const add = () => console.log("I am arrow function");
  add();
}
arrowFunction();

// IIFE function (Immediately Invoked Function Expression)

(function iifeFunction() {
  console.log("I am IIFE function");
})();


