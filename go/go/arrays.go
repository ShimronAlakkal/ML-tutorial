package main

import "fmt"

func main() {
		// 						 In this one, you're gonna learn about arrays
		
	// An array is a fixed length datatype in go lang. It is one of the fundamental datatypes in any programming language.
	// Here is how you define an array. 'var arrayName [<array length>]datatype'
	// The array length is the maximum number of elements that you could store in an array 

	// // Here is an example of an array definition
	var array [5]int   // This is an array of integers named 'array' which can accomodate, at most, 5 integer values

	fmt.Println("The array defined above is ",array)

	// // You can add values into ana array like below
	array1 := [5]int{1,2,3,4,5}
	fmt.Println("array 1 is ",array1)

	// // you	can create an array of any dimension. Its going to be a vector at the lowest dimension
	// // Here is how to create a 2 dimensional array with three columns and 2 rows -- and each of them should be occupied 
	 array2d := [2][3]int{{1,2,3},{4,5,6}}
	fmt.Println("The 2 dimensional array is ",array2d)

	//  You can similarly create arrays of multiple dimensions like 3d, 4d etc..
	

	//  ACCESSING A VALUE INSIDE AN ARRAY 

	// 'index' in an array is the place of a value in the specific array.
	// In the above defined array ('array1') to access the value 3 you can use 
	// [1,2,3,4,5] is the value in the array and thier indeces are [0,1,2,3,4]. i,e, 0 is the position of 1 in the array,
	// 1 is the position of 2 in the array,and so on...
	fmt.Println(array1[2])  // this prints out 3 as 2 is the index of the value 3 in the array1

	// To access the value 4 from the array2d, we can do the following

	fmt.Println(array2d[1][0])  // this is going to return the value in the 0th index of the 1st index
	// i,e, the 1st index of the main array (array2d) is [4,5,6] and since what we need is the value4 and since its in the 0th index,
	// we use another indexing to get the value like [1][0].

	//  ******* IN THE NEXT ONE, WE'LL TAKE A LOOK AT ANOTHER DTYPE CALLED SLICES *******  


}