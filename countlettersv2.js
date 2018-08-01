function counterLetters(sentence) {
  var letterIndex = {};
  var letters = sentence.split("");
  // console.log(letters);

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter !== " ") {
      if (letterIndex[letter] === undefined) {
        letterIndex[letter] = {count: 1, index: [i]};
      } else {
        letterIndex[letter].count +=1;
        letterIndex[letter].index.push(i);
      }
    }
  }
  return letterIndex;
}
console.log(counterLetters("lighthouse in the house"));