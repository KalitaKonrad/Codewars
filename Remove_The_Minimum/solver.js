function removeSmallest(numbers) {
  let indexOfMinimum = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMinimum), ...numbers.slice(indexOfMinimum + 1)]
}