// write a function with a child function
function parent(){
    var child = function(){
        console.log("I am a child function");
    }
    child();
}

// write an example of a higher order function
function higherOrder(func){
    func();
}

//STALE CLOSURE
function staleClose(){
    let counter = 0;
    return function(){ //this is the staleClose - it closes out the counter variable
        counter++;
        console.log(counter);
    }
}

staleClose()()//returns closure //returns 1
staleClose()()//returns new closure //returns 1
const close = staleClose();//returns new closure
close()//returns 1
close()//returns 2 - same closure
close()//returns 3 - same closure

//CLOSURE
let count = 0;
function closure(){
    return function(){ //closure
        count++;
        console.log(count);
    }
}
closure()()//1
closure()()//2
const close2 = closure()
close2()//3


//beware closures that EVALUATE values (making them static) from their lexical scope and then called later to use

//Main TakeAway - check where values are being ealuated and then captured - this is where they can become outdated when used later
//Stale closures often seem to be associated with their immedieate parent function because this is when they are initialized
//so when they are called later they have captured a potentially outdated value

//common fixes to access the latest value in closures:
//1. move declaration of values to the parents outer scope.
//2. move declaration to the closure - ensuring it evaluated when calling
//3. return another function that passes in the value so its evaluated when its called


//React closures
//https://dmitripavlutin.com/react-hooks-stale-closures/
//functional approach to solving stale closure issue
// setCount(alwaysActualStateValue => newStateValue);

//npm install eslint-plugin-react-hooks --save-dev