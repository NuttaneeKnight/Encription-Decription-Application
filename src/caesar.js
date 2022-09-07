// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift is empty or shift is 0 or < -25 or > 25 return false 
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    // change the input to be all lowercase
    let message = input.toLowerCase();

    // invert shift if decoding (encode is false)
    if (!encode) shift *= -1;
    
    //where to store the result 
    let result = "";

    // looping through the input
    for (let i = 0; i < message.length; i++) {
      let word = message[i];

      // make sure if word is in the alphabet -> .match
      if (word.match(/[a-z]/)) {

        //shift the cahrcode of the character -> use ASCII Table
        let code = message.charCodeAt(i) + shift;

        // wrap around front or back a-z
        if (code > 122) {
          code = code - 26;
        }
        if (code < 97) {
          code = code + 26;
        }

        let newWord = String.fromCharCode(code);
        result += newWord;
      } else {
        result += word
      }
    }
    // console.log(result);
    return result; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
