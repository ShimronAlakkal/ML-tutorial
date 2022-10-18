#include <iostream> // thisis a std lib

using namespace std; // This line is to allow the use of std library all throughout the file.

// This is the init point of the code. So, if you're to create something new, say a function, you gotta do it above main.
int main() {
  
//   creating a variable string
  string name = "Shimron";
  
//   outputting the charecters onto the console cout;
  std:: cout << name << " Is my name" << endl; // This stmt uses the std:: inspite of just cout. This is also a chained operation
  cout << name << " is my name" << endl 
       << 19 <<  " is my age" << endl;  // endl is to end line. Else, the cout would've been adjacent instead of a new line.
  
//   creating a constant
  const double pi = 3.1415;
  
//   getting data from the console to calc the interest
  const double interestPercentage = 0.78;
  double capitalTaken;
  double timeTaken;
  
//   get data 
  cout << "Enter the amount taken as a loan ";
  cin >> capitalTaken;
  
  cout << "Enter the timeas of now ";
  cin >> capitalTaken;
 
  
//   print the interest adjusted payable amount
  cout << "SI  = " << ( capitalTaken *  interestPercentage  *   timeTaken )/100 ;
  
  
  return 0;
  
}
