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
    const lookUpTable = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    //copy  the lookup table in preparation for sort mutation, 
    const reverseLookUpTable = lookUpTable.slice();
    reverseLookUpTable.sort((a, b) => a < b ? 1 : -1);
    //ignore capital letters when encoding
    const lowerCaseMessage = message.toLowerCase()

    let encodedMessage = ""
    //if the key is positive or negative

    //change shift value based on encode true or false 
    if (encode === false) {
      if (shiftValue > 0) {
        shiftValue = -1 * shiftValue
      } else {
        shiftValue = Math.abs(shiftValue)
      }
    }
    //start decoding or encoding
    if (shiftValue > 0) {
      //work on positive shift values
      //iterate message for encoding or decoding using the look up table
      for (let i = 0; i < lowerCaseMessage.length; i++) {
        //check for anything that is not an alphabet letter and add it to the encoded message
        //duplicate all other characters into the number sequence
        if (!lookUpTable.includes(lowerCaseMessage[i])) {
          encodedMessage += lowerCaseMessage[i];
          continue;
        }
        //shift the number when encoding
        const shiftedIndex = lookUpTable.indexOf(lowerCaseMessage[i]) + shiftValue + 1;
        //get the index of the letter and add the shift 
        if (shiftedIndex < lookUpTable.length + 1) {
          encodedMessage += lookUpTable[shiftedIndex - 1];
          continue;
        }
        //const adjustedIndex = shiftedIndex - lookUpTable.length - 1;
        if (shiftedIndex > lookUpTable.length) {
          const adjustedIndex = shiftedIndex - lookUpTable.length - 1;
          encodedMessage += lookUpTable[adjustedIndex]
        }
        //create the resulting number sequence from the letters
      }
      return encodedMessage;
    } else {

      //work on negative shift values and using reverse look up table 
      //iterate message for encoding or decoding
      const newShiftValue = Math.abs(shiftValue);
      for (let i = 0; i < lowerCaseMessage.length; i++) {
        //check for anything that is not an alphabet letter and add it to the encoded message
        //duplicate all other characters into the number sequence
        if (!reverseLookUpTable.includes(lowerCaseMessage[i])) {
          encodedMessage += lowerCaseMessage[i];
          continue;
        }
        //shift the number when encoding or decoding
        const shiftedIndex = reverseLookUpTable.indexOf(lowerCaseMessage[i]) + newShiftValue + 1;
        //get the index of the letter and add the shift
        if (shiftedIndex < reverseLookUpTable.length + 1) {
          encodedMessage += reverseLookUpTable[shiftedIndex - 1];
          continue;
        }
        if (shiftedIndex > reverseLookUpTable.length) {
          const adjustedIndex = shiftedIndex - reverseLookUpTable.length - 1;
          encodedMessage += reverseLookUpTable[adjustedIndex]
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