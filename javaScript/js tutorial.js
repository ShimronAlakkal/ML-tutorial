/* 
data types are 7 in js.
String,Number,
Undefined : anything that is yet to be defined
symbol : an immutable datatype
object : more like a dictionary with key value pairs
 Null, boolean, 
*/

// Declaration of variables 
// Method 1
var variableName = 'Shimron'; // This can be used throughout the program as if its in a global scope
// var variables could be changed to be something else in the program

// method 2

let variable_Name = 'Shimron Alakkal';  // of any datatype but could be used in a scope only

// Method 3 

const constantVariables = 3.1415 ; // Variable that never changes its value


// Variable declaratoins and assignments using operators (Assignment)
// javascript is case sensitive
// declaration
var sampleVariable;

// assignment 
var assignedVariable = 2323;

// Swapping and restoring values 

sampleVariable = 23232323;
assignedVariable = sampleVariable - 232342341;

console.log("The sampleVariable is ",sampleVariable);  // PRINTING stuff to the console
console.log("The assigned variable is ", assignedVariable);

// -------------------------------------------------------------------------

// adding/subtracting/multiplying/dividing  numbers in js follow BODMAS rule
// pretty straight foreward. Just use the + sign to do so
var aRandomNumber = 12 + 212 - (213 *5464 /5468) **6 ;
console.log('The resultant is : ',aRandomNumber);


// incrementing and decrementing from numbers

console.log(aRandomNumber++);// adds 1 to the number
console.log(aRandomNumber--);

aRandomNumber += 124124;
console.log(aRandomNumber);

aRandomNumber -= 234234;
console.log(aRandomNumber);

var decimalNumber = 24.234;
console.log(decimalNumber);

// getting the remainder 

var remainderOfNumbers = 4232.234 % 2423;
console.log(remainderOfNumbers);
