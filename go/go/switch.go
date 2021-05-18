package main

import "fmt"

func main(){
 
//   In this one, you'll be learning about switch statement
  //   Switch statements can be used as an alternative to if else statements.
  
  //   Let's say that you wanted to check if a vavriable (defined earlier) is 1 or 0 or not any of this
  var numberVariable int = 1
  
  switch numberVariable {
    case 1:   // this line just checks if the value of numberVariable is 1 -- and if it is true, the block below is executed 
      fmt.Println("The value of our variable is 1 ")
    case 0: // this line just checks if the value of numberVariable is 0 -- and if it is true, the block below is executed 
      fmt.Println("The value of our variable is 0 ")
    default : // this line only execute if the above conditoins don't satisfy
      fmt.Println("The value of our variable is neither 1 nor 0 ")
  }
  
  // Let's say you wanted to check if the above vavriable is greater than 1 or not. Here is another way.
  
  switch {
    case numberVariable > 1:
      fmt.Println("The value of our variable is greater than 1")
    case numberVariable < 1:
      fmt.Println("The value of our variable is less than 1")
    default:
      fmt.Print("This section called default is not necessary but you can add it if you want to.")
  } 
  
}
