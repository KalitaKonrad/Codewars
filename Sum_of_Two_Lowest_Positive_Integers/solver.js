function sumTwoSmallestNumbers(numbers) {  
  let lowest = numbers[0] < numbers[1] ? numbers[0] : numbers[1];
  let secondLowest = numbers[0] == lowest ? numbers[1] : numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      secondLowest = lowest;
      lowest = numbers[i];
    }
    else if(numbers[i] < secondLowest) {
      secondLowest = numbers[i];
    }
  }
  
  return lowest + secondLowest;
}