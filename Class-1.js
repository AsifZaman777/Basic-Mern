

//datatypes 3 types

/*
var -> hoisting possible, redeclaration possible, reinitialization possible  
let -> hoisting not possible, redeclaration not possible, reinitialization possible
const -> hoisting not possible, redeclaration not possible, reinitialization not possible
*/


function test()
{
    if(true)
        var a = 10;
        {
            console.log(a);
        }
    console.log(a);
}

test();