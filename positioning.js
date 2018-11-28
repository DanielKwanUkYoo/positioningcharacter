function countLetters2 (input) {
 var letters = input.split(' ').join('').toLowerCase();
 var obj = {

 }
for (var i = 0; i < letters.length; i++) {
 var letter = letters[i]

 if (letter in obj) {

   obj[letter].push(i);
 } else {
   obj[letter] = [i]

 }
}
 return obj;
};



console.log(countLetters2('lighthouse in the house'));