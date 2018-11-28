var obj = {

};

function countLetters (input) {
  var letters = input.split(" ").join('').toLowerCase().split("")

  for (var i = 0; i < letters.length; i++) {
    var indexOf = letters.indexOf(letters[i])

    if (obj[letters[i]]) {
      obj[letters[i]].push(indexOf)
      } else {
      obj[letters[i]] = [];
      obj[letters[i]].push(indexOf);
      }
    }
return obj;

}


console.log(countLetters('lighthouse in the house'))


