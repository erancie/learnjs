

//a String object
const otherObject  = 'bobby'

//get the method you want to use from a different object (Array)
const method = Array.prototype.map


//use .call() on the method
    //param1 - pass in the new object that will call the foreign method
      //param2, 3, 4... pass in arguments for the method seperated by comma 
const callRes = method.call(otherObject, e=>e+'+)')

console.log(callRes)


//use .apply() on the method 
const arr=[ e=>e+'O'] // - FIND MULTI ARG EXAMPLE**
//use .apply on the method
  //param1 - new object
    //param2 - pass in multiple arguments for the method with an array
const applyRes = method.apply(otherObject, arr )

console.log(applyRes)


const numbers = [1, 6, 3, 8, 4, 5, 3, 0]

let max = Math.max.apply(null, numbers) //null will point to global
console.log(max)


/////////////////////////////////////////////

//Callbacks - Lower Order Functions

//create your own map funciton

//this higher order function is called first
Array.prototype.myMap = function(callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    //every element in the array will be passed to the cb func
    //for which the return value will be evaluated and then pushed to an array
    arr.push(callback(this[i])) 
  }
  return arr
}


//when calling the higher order myMap function, 
// a callback function must be given as an argument
// the callback  will include a parameter as defined in the higher order function

const mapped = numbers.myMap(function(e){
  //this block defines what return value is given with access to each element
  return 2*e
})

console.log(mapped)

// callback functions have to be defined according to how they are used in their higher order functions

// callbacks can be defined to include parameters that handle values provided by its parent function

// what is done with those values is then decided by the callback code block



//callbacks are functions that are
  //1. given as an argument to another function
  //2. then called inside that function 

//So when a higher order function is called, any functions that are included as arguments
// will also be called (back) sometime within its execution

//Callbacks can be used to 
//extend functionality
//break up functionality 
//execute code at a later time

//---> loop over array for values ||| CB---> double value ||| ---> return new array of values


//should be named 'call later' functions


// If the callback itself defines arguments, 
  // they represent values from the higher order function

//Call a Method - Provide argument as a function to Call Back @ Event