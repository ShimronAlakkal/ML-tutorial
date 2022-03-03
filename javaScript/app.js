//inorder to import a method or class, you've to use import
import { sum } from "./utils.js";

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

// to concatinate two arrays, use the .concat() method
let a1 = [2,3,4];
let a2 = [5,12,12,12,3,42,342,12,35,23,52,63,2];
console.log(a1.concat(a2));



// filtering in an array use array.filete()
console.log(a2.filter( number => number>1 && number < 69));


// you can use .map( x => fucntion ) to do stuff like this
a2.filter( number => number>1 && number < 69).map(number => console.log(number,' is the number from a2 under filter') );


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

// this is a simlple function that has a default param val to hold the space for a param that has not been passed on while function call
function simple(param1, param2 ='something'){}

// like in python you can reciece multiple params in the form of a list by using ... AKA the rest operator
function simple2(...args){
	console.log(args,' is the arguments passed in while function call, now in the form of a list');
}

simple2('hi',1,23,'hello,',[1213],true);


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


// creating an object the is constant but can mutate its value
const object = {PI : 3.14};

console.log(object);

object.PI = 222;
console.log(object);


// But since we want pi to be a constant and not change, we use object . freeze( obj namw )
Object.freeze(object);



// creting an anonymous function. The below function willbe stored in the variable. So use that to call the func like below
let sum = (a,b) => a+b;

console.log(sum(1,2)," should give you three");



// lets now go to the spread operator
let ab = [1,2,3];
let ai = ab;  // both variales are in one memory location.. like two names for a single person
console.log(ab,' is ab and a1 si ',ai);
ab.push(a2[4]);
console.log(ai,' is a1 after editing a');

// if you wanna copy and have things not change up, use [...arg]

let be = [12.23,121,4,533,3];
let b1 = [...be]      // essentially creates a separate copy of the thing
console.log(be,b1);
be[0] = 2323232323;
console.log(be,b1);



// destructuring in objects 
let dict = {pi:3.14,r:2};
const {pi : v,r:radius} = dict ;

// the above line just creates two variables v and radius and assigns them the value pi and r, taken from the object called dict
console.log(v,radius);

// destructuring in arrays
const [x,y,,,s] = [1,2,3,4,5,6];
// here x is 1,y 2 and 3 and 4 are skipped and then s is 5
console.log(s);


// destructuring in rest operator
const [,,...args] = [1,2,3,4,23,23,42,343];
console.log(...args);

//  you could use the backtick to create awesome strings
console.log(
` This is so cooler than the normal guys. "double and 'singlw ' quots" 

multilines and even ${a1} variables`
	);



// if your function is going to return an object with same key and value names,
let join = (name, age, gender) =>  ({name,age,gender});   // exactly like return { name: name, age : age , gender : gender} 


// creating a class
// getter and setter in classes

class Employee{

	constructor(name,age,eid){
		this.name = name;
		this.age = age;
		this.eid = eid;

		this.profile = age * eid - 1000;
	}

	get empStatus(){
		return this.profile;
	}

	set empStatus(age){
		this.profile = age * this.eid -1000;
	}

}

// use the new keyword with every class instantiation
let emp = new Employee("john",123,111);
console.log(emp.empStatus);
emp.empStatus = 22;
console.log(emp.empStatus);


// //  usig the import
// let ig = new InstaLogin('shimron',1234);
// console.log(ig.uname, ig.pwd);

sum();





