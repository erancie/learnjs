
//currying is a way to break up and handle a funcion's arguments in seperate nested functions
//rather than handle all arguments in the first function
//it can return a function that takes the next argument and so on.
//when you call the function you can chain the arguments together

//explain currying with an example
function add(a,b,c){
  return a+b+c;
}

// console.log(add(1, 5, 15))

function curriedAdd(a){
  return function(b){
      return function(c){
          return a+b+c;
      }
  }
}

// console.log(curriedAdd(1, 5, 15))