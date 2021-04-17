/**
 * Palindrome 
 * a word, phrase, or sequence that reads the same backward as forward
 * e.g : race car, Madam I׳m Adam
 */

function isPalindrome(string){
  var strLow = string.toLowerCase(),
      charactersArr  = strLow.split('');
 var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
 var lettersArr = [];
//  for (i = 0; i < 26; i++) {
//    var alphabetCharacter = (i+10).toString(36);
//    validCharacters.push(alphabetCharacter);
//  }
 
 charactersArr.forEach(character =>{
  if(validCharacters.indexOf(character) > -1){
    lettersArr.push(character);
  }
 });
 if(lettersArr.join('') !== lettersArr.reverse().join('')) return false;
 return true;

}


console.log(isPalindrome('Madam I׳m Adam'));