// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // make sure that there is no repeat if so return false
    let isRepeated = /(.).*\1/.test(alphabet);
    if (isRepeated) return false; 
    // input alphabet has to be 26 chars exact
    if (alphabet.length === 0 || alphabet.length > 26 || alphabet.length < 26) return false;

    // split input alphabet into an array
    const alphabetCode1 = alphabet.split(""); 
    const alphabetCode2 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // compare the 2 alphabetCodes
    function translate(alphabetCodeA, alphabetCodeB) {
      // result of the encoded and decoded messafe
      let result = ""; 
      let message = input.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        //loop through the message
        let letter = message[i];
        // console.log(`letter is ${letter}`);
        if (letter.match(/[^ ]/)) {
          //if the character is any character but a space

          //look up index of letter
          let num = alphabetCodeA.indexOf(letter); 
          //add number with matching index to the code
          result += alphabetCodeB[num]; 
        } else {
          //if character is a space keep the space
          result += letter; 
        }
      }
      return result; //return code
    }

    if (encode) {
      //this block encodes a message
      let final = translate(alphabetCode2, alphabetCode1);
      return final;
    } else {
      //this block of code decodes a message
      let final = translate(alphabetCode1, alphabetCode2);
      return final;
    }
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
