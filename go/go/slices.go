package main

import "fmt"

func main() {

	// In this one, you'll learn about slices 
	// Slices are, like the name suggests, part or slice of an array.
	// eg. if [1,2,3,4] is an array [3,4], [1], [1,2,3] etc... are slices of that array
	// Slices, like arrays, are datatypes in itself but we could say that it is built on arrays. It need not be provided with a length
	// when defined as it can be of any length. 


	var array [5]string = [5]string{"Hi","Hello","World","Go"} // an array that can contain at most 5 values(Strings) in it.

	// now lets create a slice that contains everything in the array from 'world' (position = 2)

	var slice []string = array[2:]  //this creates a slice that contains values from the 2nd index of 'array' to the last including the last
	fmt.Println("slice is ",slice)

	// You can also create a slice without actually pre-defining an array.
	var slice1 []int = []int{1,2,3,4}
	fmt.Println(slice1,"is the slice1")

	slice2 := []int{2,34,35,34534,353,646,54}[2:6]  // retrieves the values inside from index 2 to 6 but excludes the one in the 6th position
	fmt.Printf("The slice is %d ",slice2 )
}