class LetterSequence {

  static createSequence (sequence){
    let characters      = sequence.split("");
    let containerString = "";
    let repeatCount     = 1;

    for (let i = 0; i < characters.length; i++){
      //var currentChar = characters[i];
      //var prevChar    = characters[i - 1];
      //var nextChar    = characters[i + 1];
      let [currentChar, prevChar, nextChar] = [characters[i], characters[i - 1], characters[i + 1]];

      if (currentChar === prevChar){
        repeatCount++
      }

      // If the sequence is broken, and the repeat count is greater than 1
      // add the letter and the repeat count to the return string
      if (currentChar !== nextChar && repeatCount >= 1){
        var repeats = repeatCount > 1 ? String(repeatCount) : ""
        containerString += (repeats + currentChar)
        repeatCount = 1;
      }
    }

    return containerString;
  }

  static decodeSequence (sequence) {
    var containerString = "";
    var characters      = sequence.split("");

    for (let i = 0; i < characters.length; i++){
      var current         = characters[i];
      var nextChar        = characters[i + 1];

      // If the current character is not a number, then there must be a letter after it
      if (!isNaN(characters[i])){
        // So repeat it n times, and add it to our return value
        var letters = this._repeat(current, nextChar);
        containerString += letters;
      // If the current character is a letter, and the last character is a letter, then
      // it must be a lone letter
      } else if (isNaN(characters[i]) && isNaN(characters[i - 1])){
        containerString += characters[i]
      }
    }

    return containerString;
  }

  // Maybe there's a function to do this in ES6...?

  static _repeat (count, character){
    var characters = "";
    if (count <= 1){
      count = 1
    }
    for (var i = 0; i < count; i++){
      characters += character;
    }
    return characters;
  }
}


module.exports = LetterSequence;
