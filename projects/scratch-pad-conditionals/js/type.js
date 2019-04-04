// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return true;
    }
    else {
        return false;
    }


    // bool ? a : b 

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
   
        if (typeof value !== 'object') {
           return false;
        }
        else if (Array.isArray(value)) {
            return false;
        }
        else if (value instanceof Date) {
           return false;
        }
        else if (value  === null) {
           return false;
        }
        else {
          return true;
        }
    




    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    /* Good start! 
    
    Try if (Array.isArray(value)) to check if value is an Array
    
    to see if value is an Object just use isObject(value) which you've
    written above!
    
    So the whole if statement will be:
    
    if(Array.isArray(value) || isObject(value)) {
        return true
    }
    */
    
    if (Array.isArray(value) || isObject(value)) {
        return true;
    }else {
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    /* Good start! For this we want to do the same if statements
    that you used in isCollection to test if value is An Array,
    null or a Date before checking if it is an object. Then you 
    can use typeof to check the rest of the types*/    
    
     
    if (Array.isArray(value) || isObject(value)) {
        return true;
    } 
    else if  (typeof value === "object") {
        return 'object';
    }
    else if (typeof value === 'string') {
        return 'string';
    }





    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
