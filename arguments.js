function sum(...args){
    let sum = 0;

    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;

}


//console.log(sum(1,2,3,4));
//console.log(sum(1, 2, 3, 4, 5));


Function.prototype.myBind= function(context, ...bindArgs){
    let that = this;

    return function(...callArgs){
        return that.apply(context, bindArgs.concat(callArgs));
    }
}


//class Cat {
//    constructor(name) {
//      this.name = name;
//    }
//  
//    says(sound, person) {
//      console.log(`${this.name} says ${sound} to ${person}!`);
//      return true;
//    }
//  }
//  
//  class Dog {
//    constructor(name) {
//      this.name = name;
//    }
//  }
//  
//  const markov = new Cat("Markov");
//  const pavlov = new Dog("Pavlov");
//  
//  markov.says("meow", "Ned");
//  // Markov says meow to Ned!
//  // true
//  
//  // bind time args are "meow" and "Kush", no call time args
//  markov.says.myBind(pavlov, "meow", "Kush")();
//  // Pavlov says meow to Kush!
//  // true
//  
//  // no bind time args (other than context), call time args are "meow" and "a tree"
//  markov.says.myBind(pavlov)("meow", "a tree");
//  // Pavlov says meow to a tree!
//  // true
//  
//  // bind time arg is "meow", call time arg is "Markov"
//  markov.says.myBind(pavlov, "meow")("Markov");
//  // Pavlov says meow to Markov!
//  // true
//  
//  // no bind time args (other than context), call time args are "meow" and "me"
//  const notMarkovSays = markov.says.myBind(pavlov);
//  notMarkovSays("meow", "me");
//  // Pavlov says meow to me!


function currySum (numArgs){
    let func = sum;
    let nums = [];

    return function _curriedSum(el){
        nums.push(el);

        if(nums.length < numArgs) return _curriedSum
        
        else return func(...nums);
    }
  }

let sum0 = currySum(4);

console.log(sum0(5)(30)(20)(1)); // => 56

Function.prototype.curriedSum = function(numArgs){
    let func = this;
    let nums = [];

    return function _curriedSum(el){
        nums.push(el);

        if(nums.length < numArgs) return _curriedSum
        
        else return func(...nums);
    }
  }


//console.log(curry(5)(30)(20)(1)); // => 56


