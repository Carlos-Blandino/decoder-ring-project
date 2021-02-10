// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(message, scrambledAlphabet, encode = true) {
    // your solution code here
    //short-circuit testing
    if (!scrambledAlphabet || scrambledAlphabet.length < 26) return false;

    //
    const toLowerMessage = message.toLowerCase();

    let result = ""

    const actualAlphabetArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

    const scrambledAlphabetArray = scrambledAlphabet.split("");

    let specialCharacter = 26;
    //setup a reference table
    // const lookUpTable = {
    //   a: 1,
    //   b: 1,
    //   c: 1,
    //   d: 1,
    //   e: 1,
    //   f: 1,
    //   g: 1,
    //   h: 1,
    //   i: 1,
    //   j: 1,
    //   k: 1,
    //   l: 1,
    //   m: 1,
    //   n: 1,
    //   o: 1,
    //   p: 1,
    //   q: 1,
    //   r: 1,
    //   s: 1,
    //   t: 1,
    //   u: 1,
    //   v: 1,
    //   w: 1,
    //   x: 1,
    //   y: 1,
    //   z: 1
    // }

    //perform another input check
    //special characters need to exist, does the scrambled alphabet contain only alphabet letters
    actualAlphabetArray.forEach((element) => {
      if (scrambledAlphabetArray.includes(element)) {
        specialCharacter -= 1;
      }
    })
    if (!specialCharacter) return false;

    //create reference table of letter and frequency of letter
    const scrambleTable = scrambledAlphabetArray.reduce((acc, currentElement) => {
      acc[currentElement] = (acc[currentElement] || 0) + 1;
      return acc;
    }, {})

    //use reference table to compare and return false if duplicates are found

    //check against the scramble table
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
        //duplicate all other characters into the number sequence
        const letter = toLowerMessage[i];
        if (actualAlphabetArray.includes(letter)) {
          const actualIndexInAlphabet = actualAlphabetArray.indexOf(letter);
          result += scrambledAlphabetArray[actualIndexInAlphabet];
        } else {
          result += toLowerMessage[i];
        }
        // grab index of the letters actual index and swap for the scambled array's index value

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