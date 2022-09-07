// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution")

describe("sunstitution", () => {
    it("should return false if the given alphabet is not exactly 26", () => {
        let input = "a";
        let alphabet = "abc";
        let actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if there is any duplicate in the input alphabet", () => {
        let input = "thinkful";
        let alphabet = "abcabcabcabcabcabcabcabcyz";
        let actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should correctly translate based on the input alphabet", () => {
        let input = "thinkful";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let expected = "jrufscpw";
        let actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should ignore caps", () => {
        let input1 = "you are an excellent spy";
        let input2 = "YOU ARE an EXCELLENT Spy";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let expected = substitution(input2, alphabet);
        let actual = substitution(input1, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should maintain the space when encoding", () => {
        let input = "you are an excellent spy";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let encode = true;
        let expected = "elp xhm xf mbymwwmfj dne";
        let actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should maintain the space when decoding", () => {
        let input = "elp xhm xf mbymwwmfj dne";
        let alphabet = "xoyqmcgrukswaflnthdjpzibev";
        let encode = false;
        let expected = "you are an excellent spy";
        let actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
})