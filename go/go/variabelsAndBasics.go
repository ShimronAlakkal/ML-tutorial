
//  INDEX 0

// in go, you work with packages. So, essentially, when you're creating a new file and coding in it in go you're pretty much
// creating a package in go. Main just allows others to know and use the package as a main one as of my understanding. 
package main  // so you just type in package <type or name> to indicate it


// fmt stands for formatter which is a package(default) given to you with some functions in it that you could use yourself to 
// get some stuff done
import "fmt"  // use an import statement to import packages. You could also import many packages simulatneously (talking about that in a new one)


// in Go, like in C++, dart, Java etc. the program start from a function/method called main. So we create a function called main 
//  using the keyword func which indicates that it is a function.
func main(){

	//the below line shows how to print a something on a new line in the console 
	fmt.Print(" the content to print here ")

	//  to print something in a line without the pointer going to the next line use 
	fmt.Print(" the content goes here  ")

	// If you import "fmt" you should be using it or it will show you error on compiling



	//  *** DECLARING A VARIABLE AND USING IT ***

	// use the keyword "var" int the beginning, the name of the variable in the middle and the data type in the end before the =
	var stringVariable string = "Shimron Alakkal"
	var integerVariable int64 = 123
	var floatVariable float64 = 12.445
	var booleanVariable bool = true
	
	fmt.Println("String variable is ", stringVariable)
	fmt.Println("Integer 64 bit variable ",integerVariable)
	fmt.Println("float64 variable ",floatVariable)
	fmt.Println("boolean variable ",booleanVariable)

	// if you ever create a variable and not use it the compiler is not going to run the code

	// there is also another way to create a variable without explicitly typing the dtype -- using := sign

	sampleVariable := "Maine Coon"  // here the variable is created and assigned with the data type
	fmt.Print("sample variable printed here ",sampleVariable)

	//    	***  IN THE NEXT ONE, YOU'LL BE LEARN ABOUT CONDITIONAL STATEMENTS ***  
	
}
