//inheritance using classes and prototypes

class Thing {
  constructor(name){
    this.name = name
  }
  method(){
    console.log('hello from thing')
  }
}

const obby = new Thing('start')

Thing.prototype.getName = function(){
  return this.name
}

console.log(obby.getName())

class LittleThing extends Thing {
  constructor(sound, name){ //constuctor includes new args + args from super
    super(name); //super is the parent constructor - must use in child classes 
                //pass in args to construct parent properties - they can be sourced from the child constructor 
    this.sound = sound;
  }
}

let little = new LittleThing('Woohoo')
let little2 = new LittleThing('Woohoo', 'Benny')

console.log(little)
console.log(little2)

console.log(little2.getName())

console.log(little2.method())


