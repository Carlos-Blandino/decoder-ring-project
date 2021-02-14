const polybiusModule = (function () {

  function polybius(message, encode = true) {
    //guard clauses: one for length , one for total count of numbers 
    if (message.length === 0) return false;

    if (encode === false) {
      let totalOfNumbers = 0;
      for (element of message) {
        if (parseInt(element)) {
          totalOfNumbers += 1;
        }

      }
      if (totalOfNumbers % 2 === 1) return false;
    }
    //end of guard clauses

    //setup accumulator variable
    let result = "";
    //created dictionaries that I ended up calling look up tables
    //one for letter to number and the other for number to letter
    const lookUpTable = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55
    }
    const invertedTable = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z"
    }
    const lowerCaseMessage = message.toLowerCase();

    if (encode) {
      //don't encode anything that is not in the reference table, just add it to the result message
      for (let i = 0; i < lowerCaseMessage.length; i++) {
        if (!(lowerCaseMessage[i] in lookUpTable)) {
          result += lowerCaseMessage[i];
          continue;
        }
        result += lookUpTable[lowerCaseMessage[i]]
      }
      return result;
    } else {
      //start decoding here
      //check for the accumulation of number of pairs , needs to be even
      // check passed so continue with program
      let key = "";

      for (let i = 0; i < message.length; i++) {
        //when iterating look for matching letter, letter is a sequence of every 2 numbers
        key += message[i]

        //first look each individual character and check if its a number
        //if you find any character that is not a number add it to the collection
        if (key.length === 1 && (!parseInt(key))) {
          result += key
          key = ""
          continue;
        }

        //when you get 2 , check the lookup table and add matching letter to a the collection
        if (key.length === 2) {
          result += invertedTable[key]
          key = ""
          continue;
        }

      }
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;