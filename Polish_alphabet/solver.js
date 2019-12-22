function correctPolishLetters (stringPassed) {
  let polishLetters = {
  'ą' : 'a',
  'ć' : 'c',
  'ę' : 'e',
  'ł' : 'l',
  'ń' : 'n',
  'ó' : 'o',
  'ś' : 's',
  'ź' : 'z',
  'ż' : 'z'
  };
  return [...stringPassed].map(character => {return polishLetters[character] || character}).join("");
}
