package main

import "fmt"

func main() {


	// conditional statements are used to see if a condition matches with the ones given
	// conditional statements are used with "if", "else", and "else if" keywords in the code 

	// for instance if you want to check if a variable declared earlier (of type int64) is greater than 1 or not 
	int64Var := 123
	if int64Var > 1{ // checks if the variable is greater than 1
		fmt.Println("The variable is greater than 1")
	}else {   // if the variable is not greater than 1, this part of the code is run
		fmt.Println("The number is not greater than 1")
	}

	// for another instance let's check if a variable declared is even or not 
	smapleVariable := 12

	 // checks if the number is even or not-- by diving the number by two and checking if the remainder of that operation is 0 
	if smapleVariable % 2 == 0{ 
		fmt.Println("The sample variable is even")
	}else if smapleVariable % 2 != 0{  //  diving the number by two and checking if the remainder of that operation is not 0.
		fmt.Println("The sample variable is odd")
	}
	

	//  *** IN THE NEXT ONE YOU'LL LEARN ABOUT LOOPS *** 
 
}
