
//mutability - objects are passed by reference - if you change the value of a property in the object, it will change in the original object

//when passing by reference your are passing in the original object

let obj = {
  name: 'Benny'
}

function changePerson(object){ //original object is passed in
  object.name = 'Bobby'
}

const person = changePerson(obj)


//immutability - objects are passed by value - if you change the value of a property in the object, it will not change in the original object

//when passing by value you are passing a copy of the object - the original object is not changed

//using constructor functions or factory function to create objects is a way to maintain immutability
  // - you can't change the original object - you can only change the copy. 

//Constructor 
function NewPerson(name){
  this.name = name
}
const person1 = new NewPerson('Benny')

//Factory
function NewPerson2(name){
  return {
    name: name
  }
}
const person2 = new NewPerson2('Bobby')


//pass by ref or val refers to wheather or not arguments in a function use the orignal value (the reference) or a copy of the value
//parameters can either be interpreseted by the function code as a 'refernce' to the original value or a copy of the 'value'

///////pass by value vs pass by reference
////OR pass in a copy of the value vs pass in the original value
////OR pass by primitive vs pass by object


let value = 10 //is value/copy because it is a primitive

let reference = { //is reference/original because it is an object
  num: 10
}

function change(n){
  if(typeof n === 'object'){
    n.num += 1
    console.log(n.num)
  }
  else{
    n += 1 
    console.log(n)
  } 
}

change(value)//11

console.log(value)//10 - value is not changed because a copy was passed in

change(reference)//11

console.log(reference.num)//11 - reference is changed because the original object was passed in

