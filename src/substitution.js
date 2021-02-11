// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(message, scrambledAlphabet, encode = true) {
    //short-circuit testing
    if (!scrambledAlphabet || scrambledAlphabet.length < 26) return false;
    const toLowerMessage = message.toLowerCase();
    let result = ""
    const actualAlphabetArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    const scrambledAlphabetArray = scrambledAlphabet.split("");
    //create reference table of letter and frequency of letter
    const scrambleTable = scrambledAlphabetArray.reduce((acc, currentElement) => {
      acc[currentElement] = (acc[currentElement] || 0) + 1;
      return acc;
    }, {})
    //do a check duplicates check before going foward
    //iterate and check against the scramble table for duplicates
    for (letter in scrambleTable) {
      if (scrambleTable[letter] < 2) {
        continue;
      } else {
        return false;
      }
    }
    if (encode) {
      //checking for only alphabet letter to be in scrambled alphabet
      // translating message: iterate message and maintaining spaces
      for (let i = 0; i < toLowerMessage.length; i++) {
        //check for anything that is not an alphabet letter and add it to the encoded message
        //copy all other characters into the number sequence
        const letter = toLowerMessage[i];
        if (actualAlphabetArray.includes(letter)) {
          // grab index of the letters actual index and swap for the scambled array's index value
          const actualIndexInAlphabet = actualAlphabetArray.indexOf(letter);
          result += scrambledAlphabetArray[actualIndexInAlphabet];
        } else {
          result += toLowerMessage[i];
        }
      }
      return result;
      //decoding starts here
    } else {
      for (let i = 0; i < toLowerMessage.length; i++) {
        //check for anything that is not an alphabet letter and add it to the encoded toLowerMessage
        //duplicate all other characters into the number sequence
        const letter = toLowerMessage[i];
        const newLetterIndex = scrambledAlphabetArray.indexOf(letter)
        if (newLetterIndex >= 0) {
          result += actualAlphabetArray[newLetterIndex]
        } else {
          result += toLowerMessage[i];
        }
        // grab index of the letters actual index and swap for the scambled array's index value
      }
      return result;
    }
  }
  //Testing code below

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;