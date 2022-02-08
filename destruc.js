
//shorthand properties/////////
let arr = [1,2,3,4,5]

let obby = {
  // arr: arr,
  arr, //shorthand for above - uses the reference as the property name
  name: 'Daz'
}

arr[0] = 'word'

console.log(obby)

//the rest operator (...) - used to CREATE an array from the rest of the arguments
const rest = (firstArg, ...restOfArgs) => {
  console.log(firstArg)
  console.log(restOfArgs)
}

rest(1,2,3,4,5)  

let obby2 = {
  name: 'Daz',
  age: '23',
  number: '555-555-5555'
}

//spread operator with objects allows you to unpack an object into its individual elements
  // can be used to copy an object's elements into another object
let obby3 = {
  ...obby2,
  other: 'other'
}

console.log(obby2)
// console.log(...obby2) //error


//the rest operator CREATES an array from the rest of the arguments passed in to a function, 
//while the spread operator UNPACKS an array into its individual values.
//the spread oeprator can also be used with objects to unpack its elements or key value pairs

//NOTE
// elements are both the key and the value
// whilst properties refer to the keys

/////////////////// 
//for in & for of

//for in DOES iterate over keys of objects and arrays
for (let key in obby2) {
  console.log(key)
}

//for of DOES NOT iterate over values of an object - only an array
for(let val of obby2) { //throws error
  console.log(val)
}



/////dynamic properties
function dyno(property, value){
  return {
    [property]: value
  }
  //NOT
  // return {
  //   property: value
  // }
  //because 'property' would be a static string and not a dynamic variable
}