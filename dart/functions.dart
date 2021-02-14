// the return type is the data type of the value that will be returned after a
// a function for calculating factorial and fibonacci .

void main() {
  print(factorial(5));
  print(
      '***********************************************************************************************');
  print(fibonacci(2));
}

dynamic factorial(num number) {
  int factorial = 1;
  for (int i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

dynamic fibonacci(num end) {
  if (end <= -1) {
    return " Not possible with this number as a start";
  } else if (end == 0) {
    return 0;
  } else if (end > 1) {
    num first = 0;
    num second = 1;
    num third = 0;
    for (int i = 0; i <= end; i++) {
      third = first + second;
      first = second;
      second = third;
    }
    return third;
  }
}
