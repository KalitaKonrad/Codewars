function findLongest(arr){
  let longestNumber = arr[0], numberOfDigitsInLongest = arr[0].toString().length;
  arr.forEach(element => {
    if (element.toString().length > numberOfDigitsInLongest) {
      numberOfDigitsInLongest = element.toString().length;
      longestNumber = element;
    }
  });
  return longestNumber;
}
