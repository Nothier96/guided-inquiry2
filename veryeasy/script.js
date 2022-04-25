function returnMin(number1, number2) {
  if (number1 > number2) {
    return number2;
  } else if (number1 < number2) {
    return number1;
  } else {
    return console.log(`The two numbers are the same!`);
  }
}
console.log(returnMin(350, 45));
console.log(returnMin(230393, 1000));
