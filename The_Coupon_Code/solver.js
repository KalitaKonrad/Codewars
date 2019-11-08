// One stderr test does not pass, it was not even mentioned in the description.. 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {
    return false;
  }
  currentDate.replace(',', '');
  expirationDate.replace(',', '');
  let currentDateSplitted = currentDate.split(" ");
  let expirationDateSplitted = expirationDate.split(" ");

  let months = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12,
  }

  if (expirationDateSplitted[2] < currentDateSplitted[2]) { // year check
    return false;
  }
  else if (expirationDateSplitted[2] === currentDateSplitted[2]) {
    if (months[expirationDateSplitted[0]] < months[currentDateSplitted[0]]) { // month check
      return false;
    }
    else if (months[expirationDateSplitted[0]] === months[currentDateSplitted[0]]) { 
      if (expirationDateSplitted[1] < currentDateSplitted[1]) { // day check
        return false;
      }
    }
  }
  return true;
}