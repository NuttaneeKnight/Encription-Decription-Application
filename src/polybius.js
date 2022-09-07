// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const numberCode = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42", // i/j
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];

    const alphabetCode = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
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
      "z"
    ];
    
    console.log(numberCode.length === alphabetCode.length) //=> true, they will have the same index
    if (encode) {
      // the empty string to store the encoded message
      let result = "";
      // Caps can be ignored
      let message = input.toLowerCase();
      //loop through the string message
      for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        console.log(`letter is ${letter}`);

        //make sure that letter is a-z
        if (letter.match(/[a-z]/)) {
        // make sure that both i/j return 42
          if (letter === "i" || letter === "j") {
            result += "42";
          } else {
            // refer to alphabetCode index
            let number = alphabetCode.indexOf(letter)
            result += numberCode[number] //-> add number code to the result
          }
          } else {
            // if not a-z use original to maintain the spaces
            result += letter;
          } 
      }
      return result; //return the encode 
    } else {
      // decode
      // split a string into an array by word
      let messageArray = input.split(" ");
      console.log(messageArray);
      let lettersArray = [];
      // loop through the message array
      for (word of messageArray) {
        // a new array for each index that a pair of num == 1word
        lettersArray.push(word.match(/.{2}/g));
      }
      // make sure that the numbers are in pairs (even)
      let even = messageArray.every((word) => word.length % 2 === 0);
      if (!even) {return false;}

      let finalArray = [];
      console.log(lettersArray);
      for (word of lettersArray) {
        let tempArray = [];
        //loop and decode get 42 "i/j" out of the way first 
        for (letter of word) {
          if (letter === "42") {
            tempArray.push("(i/j)");
          } else {
            let num = numberCode.indexOf(letter);
            let alpha = alphabetCode[num];
            //push that decoded to tempArray
            tempArray.push(alpha)
          }
        }
        finalArray.push(tempArray);
      }
      console.log(finalArray)
      let decoded = [];
      for (word of finalArray) {
        let joinedWord = word.join("")
        decoded.push(joinedWord);
      }
      console.log(decoded);
      let final = decoded.join(" ") // join back with keeping the spaces
      return final;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
