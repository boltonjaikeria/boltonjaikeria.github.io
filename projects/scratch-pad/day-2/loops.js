// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // array = ['a', 'b', 'c']
  
  for (var i = 0; i <= array.length - 1; i++) {
    // loop 1: i = 0, array[i] === array[0] === 'a'
    // loop 2: i = 1, array[i] === array[1] === 'b'
    // loop 3: i = 2, array[i] === array[2] === 'c'
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // ['a' , 'b' , 'c']
  
  for (var i = array.length - 1; i >= 0; i--) {
    
    // loop 1: i = 2, array[i] === array[2] === 'c'
    // loop 2: i = 1, array[i] === array[1] === 'b'
    // loop 3: i = 0, array[i] === array[0] === 'a'
    console.log(array[i]);
  }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
   for (var key in object){
  console.log(object[key])
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object){
  console.log(key)
}
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  for (var value in object){
  console.log(object[value]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
 for (var i = object.length; i > 0; i--) {
    console.log(object[i]);
  }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
