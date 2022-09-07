// Write your tests here!
// path the test file to caesar and use mocha chai to run the test
const caesarModule = require("../src/caesar")
const expect = require("chai").expect;

describe("caesarModule", () => { // param?
    it("should return false if shift is empty", () => {
        let input = "blah blah";
        let shift = undefined;
        let actual = caesarModule.caesar(input, shift);
        let expected = false;
        expect(actual).to.equal(expected); // ? .to.be.false? 
    });
    it("should return false if shift is = 0", () => {
        let input = "blah blah";
        let shift = 0;
        let actual = caesarModule.caesar(input, shift);
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is > 25", () => {
        let input = "blah blah";
        let shift = 26;
        let actual = caesarModule.caesar(input, shift);
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return false if shift is < -25", () => {
        let input = "blah blah";
        let shift = -26;
        let actual = caesarModule.caesar(input, shift);
        let expected = false;
        expect(actual).to.equal(expected);
    });
    it("should return wklqnixo when put thinkful", () => {
        let input = "thinkful";
        let shift = 3;
        let actual = caesarModule.caesar(input, shift);
        let expected = "wklqnixo"
        expect(actual).to.equal(expected);
    });
    it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", () => {
        let input = "bpqa qa i amkzmb umaaiom!";
        let shift = -8;
        let actual = caesarModule.caesar(input, shift);
        let expected = "this is a secret message!"
        expect(actual).to.equal(expected);
    });
    it("should return 'thinkful when put 'wklqnixo'", () => {
        let input = "wklqnixo";
        let shift = -3;
        let actual = caesarModule.caesar(input, shift);
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("spaces and special chars should stay put", () => {
        let input = "!@#$ %^&"
        let shift = -3
        let actual = caesarModule.caesar(input, shift);
        let expected = "!@#$ %^&"
        expect(actual).to.equal(expected);
    });
    it("should decode if the encode = false", () => {
        let input = "bpqa qa i amkzmb umaaiom!"
        let shift = 8;
        let encode = false;
        let actual = caesarModule.caesar(input, shift, encode);
        let expected = "this is a secret message!"
        expect(actual).to.equal(expected);
    });
    it("should ignore caps", () => {
        let input1 = "BLAH BLAH";
        let input2 = "blah blah";
        let encode = true;
        let actual = caesarModule.caesar(input1, encode);
        let expected = caesarModule.caesar(input2, encode);
        expect(actual).to.equal(expected);
    });
    it("should wrap around the front or back if shifted off the alphabet", () => {
        let input = "z";
        let shift = 3;
        let encode = true;
        let actual = caesarModule.caesar(input, shift, encode);
        let expected = "c";
        expect(actual).to.equal(expected)
    });
});

