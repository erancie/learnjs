
//////////////////////overloading in js////////////////////////////

function add(a, b, opt){
  if(opt){
    return a + b + opt
  }
  return a + b
}
console.log(add(1, 1))


/////////////////////////////
//use an options object is a good way to handle optional arguments and overloading 
function options(a, b, opt){
  if(opt){ //check for the options object - if any of its properties were passed in it will be true
    return a + b + opt.extra + opt.age
  }
  return a + b
}
console.log(options(1, 1, {extra: 1, age: 1}))
console.log(options(1, 1))