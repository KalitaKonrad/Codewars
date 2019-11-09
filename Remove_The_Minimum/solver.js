function removeSmallest(numbers) {
  let result = [], smallest = Number.MAX_VALUE;

  for (number of numbers) {
    smallest = Math.min(smallest, number);
  }

  let removed = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == smallest && !removed) {
      removed = true;
    }
    else {
      result.push(numbers[i]);
    }
  }
  return result;
}
