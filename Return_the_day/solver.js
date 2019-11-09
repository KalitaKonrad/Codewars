function whatday(num) { 
  const numToWeekDay = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday"
  };
  if (num < 1 || num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }
  return numToWeekDay[num];
}