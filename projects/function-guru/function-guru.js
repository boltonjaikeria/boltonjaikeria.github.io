//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var array = [];
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    /*
    input: [Object] data - any object 
    output: [String] - keys separated with a space
    constructs: (mathods, functions, iteration, conditionals)
    - Object.keys(data);
    - arr.join(" ")
     
    */
    var keysArray = Object.keys(data); // ['a', 'b', 'ponies', 'dingle']
    var keysStr = keysArray.join(" "); // 'a b ponies dingle'


    return keysStr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    /*
   input: [Object] object  - any object 
   output: [String] - keys separated with a space
   constructs: (mathods, functions, iteration, conditionals)
   - objectValues()
   - arr.join(" ")
    Edge Cases:
    - only string values should be included
   */

    var arr = [];

    // put the values in the object into an array

    for (var key in object) {
        // make sure only String values are addded 

        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }
    return arr.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array"
    }
    else {
        return "object"
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split(" "); //Almost! Try .split("") with no space
    arr[0] = arr[0].toUpperCase();

    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }

    return str;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Excellent start! since you split on " " then you have
    // split string into its words and put them all in arr.
    var arr = string.split(" ");
    
    
    /*  now, we want to iterate over arr and for each word in
    the Array capitalize it.
    */
    
    
    arr[0] = arr[0].toUpperCase();

    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }

    return str;

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // use capitalize word function
    
    

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {


    var profileInfo = {
        name: "Jake",
        species: "Dog"
    }
    console.log("obj.name +  is a + obj.species");

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// DO NOT DO TODAY
//function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
IOCE- Input, Output, Constructs, Edge-Cases

@param string [String] - a string of words
@param word [String] - a word

@return [Boolean] - true if word is in string
    false otherwise

*/
function hasWord(string, word) {
    var array = string.split(" ");
    // iterate
    for (var i = 0; i < array.length; i++) {
        // test each value
        if (array[i] === word) {
            // return early if found
            return true;
        }
    }
    // return negative if end of loop is reached
    return false;



}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    const array = object.friends;

    if (array === undefined) {
        return false;
    }

    // iterate
    for (let i = 0; i < array.length; i++) {
        // test each value
        if (array[i] === name) {
            // return early if found
            return true;
        }
    }
    // return negative if end of loop is reached
    return false;


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//DO ME LATER
//function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;


}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i in array) {
        var x = array[1];
        delete object[x];
    }
    return object;



}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = array.sort();
    var result = [];
    for(var i = 0; 1 < newArray.length; i++) {
        if(newArray[i + 1] !== newArray[i]) {
            result.push(array[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}