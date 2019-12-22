function nextHappyYear(year){
  year++;
  let isDistinct = function(year) {
    let yearArray = [...year.toString()];
    for (let i = 0; i < yearArray.length; i++)
      if (yearArray.lastIndexOf(yearArray[i]) != i && yearArray.lastIndexOf(yearArray[i]) != -1)
        return false;
   return true;
  }
  while(!isDistinct(year)) {
    year++;
  }
  return year;
}
