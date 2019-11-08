function calculateAge(dateOfBirth, askedYear) {
  let years = askedYear - dateOfBirth;
  if (years > 0) {
    return years == 1 ? "You are 1 year old." : "You are " + years + " years old.";
  }
  else if (years == 0) {
    return "You were born this very year!";
  }
  return years == -1 ? "You will be born in 1 year." : "You will be born in " + Math.abs(years) + " years.";
}