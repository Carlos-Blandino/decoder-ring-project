// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(message, shiftValue, encode = true) {
    //return false for if shift value is 0 < -25 or > 25
    if (!shiftValue || shiftValue === 0 || shiftValue < -25 || shiftValue > 25) return false;
    //create an array of the alphabet letters
    const alphabetReferenceArray = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    //copy  the lookup table in preparation for sort mutation, 
    const reverseAlphabetArray = alphabetReferenceArray.slice();
    reverseAlphabetArray.sort((a, b) => a < b ? 1 : -1);
    //ignore capital letters when encoding
    const lowerCaseMessage = message.toLowerCase()

    let encodedMessage = ""


    //change shift value based on encode true or false 
    if (encode === false) {
      if (shiftValue > 0) {
        shiftValue = -1 * shiftValue
      } else {
        shiftValue = Math.abs(shiftValue)
      }
    }
    //start decoding or encoding: starting on positive shift values
    if (shiftValue > 0) {
      //work on positive shift values
      //iterate message for encoding or decoding using the alphabet reference array
      for (let i = 0; i < lowerCaseMessage.length; i++) {

        //check for anything that is not an alphabet letter and add it to the encoded message
        if (!alphabetReferenceArray.includes(lowerCaseMessage[i])) {
          encodedMessage += lowerCaseMessage[i];
          continue;
        }
        //apply the shift value and get the adjusted index
        const shiftedIndex = alphabetReferenceArray.indexOf(lowerCaseMessage[i]) + shiftValue + 1;
        //the adjusted index can not be greater than the arrays length 
        //if its not greater , apply then shifted index to the array
        if (shiftedIndex < alphabetReferenceArray.length + 1) {
          encodedMessage += alphabetReferenceArray[shiftedIndex - 1];
          continue;
        }
        //anything greater than the arrays length needs to start at the beginning of the array
        if (shiftedIndex > alphabetReferenceArray.length) {
          const adjustedIndex = shiftedIndex - alphabetReferenceArray.length - 1;
          encodedMessage += alphabetReferenceArray[adjustedIndex]
        }

      }
      return encodedMessage;
    } else {
      //work on negative shift values and using reverse alphabet array
      //iterate message for encoding or decoding
      const newShiftValue = Math.abs(shiftValue);
      for (let i = 0; i < lowerCaseMessage.length; i++) {

        //check for anything that is not an alphabet letter and add it to the encoded message
        if (!reverseAlphabetArray.includes(lowerCaseMessage[i])) {
          encodedMessage += lowerCaseMessage[i];
          continue;
        }
        //shift the number when encoding or decoding
        const shiftedIndex = reverseAlphabetArray.indexOf(lowerCaseMessage[i]) + newShiftValue + 1;
        //check the index is less than the arrays length
        if (shiftedIndex < reverseAlphabetArray.length + 1) {
          encodedMessage += reverseAlphabetArray[shiftedIndex - 1];
          continue;
        }
        //anything greater than the arrays length needs to start at the beginning of the array 
        if (shiftedIndex > reverseAlphabetArray.length) {
          const adjustedIndex = shiftedIndex - reverseAlphabetArray.length - 1;
          encodedMessage += reverseAlphabetArray[adjustedIndex]
        }
      }
      return encodedMessage;
    }
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;