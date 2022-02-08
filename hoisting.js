
let arr = []

//var i; // var actually lives here with hoisting

for (var i = 0; i < 3; i++) {
  //var is hoisted outside the loop block
  arr.push( ()=>{ 
    console.log(i) 
    //this closure will look for where i lives
    //which is outside its parent scope for var
  })
}

//call each hoisted closure
arr.forEach(e=>e())


let arr2 = []

for (let j = 0; j < 3; j++) {
  //each version of j is captured 
  //by the inner closure below
  arr2.push( ()=> {
    console.log(j)
  })
}

//call each captured closure
arr2.forEach(e=>e())


//Summary:
//Check when calling closures to see 
//what version of variables they have 
//captured in their lexical scope
//particularly values in their parent


//scope practice 
var num = 20
function grandParent() {
  num = 1000
  return ()=> {
    num = 10
    return ()=> {
      console.log(num)
    }
    // console.log(num)
  }
  // console.log(num)
  // var num = 10;
}
grandParent()//changes num to 1000
grandParent()()()//changes num to 10 and logs 10



// console.log(num)
// var num = 20;
// var declaration is hoisted, not assignment


