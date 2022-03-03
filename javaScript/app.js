// declaring a variable in js
// since this is a variable of no specific dtype, it's going to be null aka undefined
var a;   
console.log(a+' is a first time')

// declaring and assigning
var b = 239;

// var ,let and const are some ways to create a variable. consts are immutable. Let works in a scope of the variable. var is  var
// if once declared, the variable name cannot be used to declare again in another line. like using let a = 323;
let c = 22;


// the variable declared using var, unless inside a specific block, could be accessed globally, unlike let  which has strict boundaries 
function scopeCheckForLetAndVar(){
	let i = "function scope";
	if(true){
		let i = "if scope";
		console.log('if block scope i:',i);
	}
	console.log("function scope i :",i);

}

scopeCheckForLetAndVar();
 
console.log('this is a after letting it'+c); 

// math operators are pretty straight forward.
// incrementing and decrement a variable 

var number;
number = 121;
console.log(number++);

number += 12;
console.log(number);

number -= 339;
number --;
console.log(number);

// the remainder operator is %

console.log(5 % 23);

// using quotes in strings
// BTW strings like in python are immutable
var string = "hello  \"ther\" ";
console.log(string);

// this can also be done using single quotes like below
console.log( 'this is a string " with wuoted items in it without a backslash" you know' );

// using some escape sequrences in string using backslash
console.log( 
	' this is a string , ging to new line \n \t getting a tab over, and creating a backslash \\ to a new line\n and backspacing from thisss\b ' );

// length of a strnig
console.log("string".length);

// getting a charecter from a string 
console.log("mensaknfaoienfoain"[2]+' should be n and there is not -1th index i js. You gotta fnid the length bruh');

// creating an array
var array = ['Jason','statham',234];

// arrays can have multiple values of different dtypes
console.log(array[1]);

array[2] = 'is cool';
console.log(array);

// arrays can also be nested arrays aka multi-dimensional arrays
var mdarray = [[1,2],[3,4]];
console.log(mdarray[1][0]);

// append is done using the push function 
array.push('but not jason derulo');
console.log(array);

// pop is going to return the popped last element in an array
console.log(array.pop()+' is the last elem popped');

// the shift method is used like pop but to reomve the first element from an array
var firstElementShifted = mdarray.shift();
console.log(firstElementShifted);

// the unshift method does the exact opposite of shift, ie pushes a value to the 0th index of an array
mdarray.unshift(firstElementShifted);
console.log(mdarray);


// delete array vals
delete mdarray[0][1];
console.log(mdarray);


// functions!! we're getting there boys
// global variables 

const pi = 3.1415;
function areaOfACircle(radius) {

	// using an if statement to check the type of radius
	// typeof returns the type in string format
	if (typeof radius != "undefined" ){
			return pi * radius ** 2;
	}else if(typeof radius === 'undefined') {
		return "wrong type provided "
	}

}
// console.log(areaOfACircle('meh')) => NaN
console.log(areaOfACircle(2))

// for funcs with no return statements, the return values are undefined
function f(){}
console.log(f());


// function for simulating a queue
function queue(arr,item){
	if(typeof arr === "object"){
		arr.push(item);
		return arr.shift();
	}
	
}

console.log(queue(array,'jonathan jdnidnfiunvisnviiuanrc'));

/* equality operators
 there is an euality operator,i.e. == and then there is a strict equality operator ===
 the == sign works by comparing objects of the same datatype 
 the === sign does not convert types like == sign does.
 the == does convert types. EG. when checking 3 == "3", => true because '3' is converted to 3 but not in ===

 there is also the strict inequloty operator too
 !== checks the values without type conversion
 != converts type.  
*/

console.log(3 == '3');     //true
console.log(3 === '3');     //false
console.log('3' === '3');    //true
console.log(3 == [3]);     //true
console.log(3 !== '3');     //true
console.log(3 != '3');      // false

// the && AND and OR || operators
console.log(3 == '3' && 3 === 3);     //true
console.log(3 || 4 );    // 3
console.log(0 == '3' || 3===3);    //treu


// switch case statements
function sc(language){

	switch (language){
		case "python":
		return 'noob';
		
		case "cpp":
		return "i love you";
		
		case "java":
		return "you just wanna make yourself look so brainy with a lot of stupid lines";
		
		case "dart":
		return "you're cool";
		
		case "js":
		return "easy cheesy sugar yeezy";

		default:
		return "dumb";
	}

}


console.log(sc("cpp"));
console.log(sc("hh"));


// javascript objects AkA JSON, AKA MAP, AKA dictionaries
var map = {
	"name":"ukraine",
	"people":2323211,
	"govt":"zelensky",
	"status of c":["in war"]
};

// accessing the values from an object 
console.log(map.name + ' is the name of the country');
console.log(map.people  + ' is the number of people in '+map.name);
console.log(map.govt + ' runs  '+map.name);
console.log(map['status of c'] + ' is the current status of '+map['name']);

// updating the map 
map.name = "Russia";
map['govt'] = "Putin";


// adding a new value to map
map['support'] = false;

// deleting a value from a map
delete map['status of c'];

console.log(map);

// checking if a propety exist in a map
console.log(map.hasOwnProperty('states'));




// while loop
var i = 0;
while(i <= 5){
	console.log("*".repeat(i));
	i++;
}


// for loop to print a flip of the above stars for a number given
function printFlipOfAboveFunction(levels){

	for(var i = 0; i <= levels ; i++ ){
		console.log( " ".repeat(levels - i) + "*".repeat(i) );
	}
}

printFlipOfAboveFunction(5);

// print pyramid using loops


// do while loops
var i = 0;
do {
	console.log(i);
	i++;
}while(i<2);



// generating a random value using the math.random function
console.log(Math.random()); // return a random value less than 1 but >= 0


// randint int function that return a random value in between 1 and < the number provided 
function randint(number){
	return Math.floor(Math.random() * number);
}

console.log(randint(122));

// parsing strinf to int
console.log( parseInt("23421") );

// to convert a strinf that is of other bases like base 2 or base 16 or base 10, use the second argument in the parseint function
console.log( parseInt("100111101", 2) );



// ternary operator like in dart condition ? if true : if false;
console.log( 5 === '5' ? 'this is JS' :'Its strict buddy boi' );














