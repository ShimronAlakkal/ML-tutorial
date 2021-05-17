package main

import "fmt"

func main(){

	// let look at loops
	// in Go, there's only one type of loop(FOR loop). For the guys from other langs like Java/C++ etc. there are no while and do while loops


	// Let's say you wanted to print values from 1 through to 10. Here is how you do it in Go 
	for i := 1 ; i <= 10 ; i++{

		fmt.Println(i)  // here 'i' is the value from 1 to 10 and it prints each value in 
	
	}

	// Here is how to make an infinite loop
	// you just use the keyword for and create a block and do the stuff inside it
	
	for {

		// for now lets assume that we have to print I LOVE YOU infinite times
		fmt.Println("I LOVE YOU")
	
	}

}