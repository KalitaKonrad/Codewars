function highAndLow(numbers){
  let numbersArray = numbers.split(" ");
  return [Math.max(...numbersArray), Math.min(...numbersArray)].join(" ");
}
