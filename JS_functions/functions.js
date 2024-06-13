//Named Functions
function demo()//function defination
{
    //function body
}

//Anonymous functions
var d=function(){
    console.log("Hwello")
}
//Immediately Invoked Function Expression(IIFE)
(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar); // Output: This is a local variable
})();
//Arrow Function
let myFunction = (a, b) => a * b;
