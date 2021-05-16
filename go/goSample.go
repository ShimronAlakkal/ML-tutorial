package main

import "fmt"

func main(){
	var name string = "Shimmy"
	fmt.Println("God Damn Hellp to the fricking world from ",name)

	result := 1.1
	fmt.Println("The byte count of 1 is ",result)

	res := Sample(1.1,1)
	fmt.Println(res)

	for i := 0 ; i <10 ; i++ {
		fmt.Println(i)
	}

	if res > 1 && res <3{
		fmt.Println("res is %.2f and is less than 3",res)
	}else{
		fmt.Println("unfortunately %f is greater than 3 or less than 1",res)
	}

	switch res{
	case 1.1:
		fmt.Println("res > 1")
	case 2:
		fmt.Println("res < 1")
	default: 
		fmt.Println("none")
	}
}

func Sample(sample float64 , sample2 float64 ) (res float64){
	res = sample * sample2 
	return 
}