// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const ALPHABET_LENGTH = 26;
  const LOWERCASE_A = 97;
  const LOWERCASE_Z = 122;

  function caesar(input, shift, encode = true) {
    // check if shift is proper value
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    };
    // convert to lower case
    const newMsg = input.toLowerCase();
    // check for encode or decode
    if (!encode) {
      shift *= -1;
    }

    let decoded = ""

    for (let i = 0; i < newMsg.length; i++) {
      // check if letter shifts off the alphabet
      if (newMsg.charCodeAt(i) > LOWERCASE_Z || newMsg.charCodeAt(i) < LOWERCASE_A) {
        console.log(String.fromCharCode(newMsg.charCodeAt(i)))
        decoded += String.fromCharCode(newMsg.charCodeAt(i));
      } else if (newMsg.charCodeAt(i) + shift > LOWERCASE_Z) {
        decoded += (String.fromCharCode((newMsg.charCodeAt(i) + shift) - (LOWERCASE_Z) + (LOWERCASE_A - 1)))
      } else if ((newMsg.charCodeAt(i) + shift < LOWERCASE_A)) {
        decoded += (String.fromCharCode((newMsg.charCodeAt(i) + shift) - (LOWERCASE_A) + (LOWERCASE_Z + 1)))
      } else {
        decoded += String.fromCharCode(newMsg.charCodeAt(i) + shift)
      }
    }

    return decoded;

  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;