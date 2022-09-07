// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("it should return '11' when the input is 'a'", () => {
        let input = "a";
        let expected = "11";
        let actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should return 'hello world' if input is '3251131343 2543241341'", () => {
        let input = "3251131343 2543241341";
        let expected = "hello world";
        let encode = false;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it("should ignore caps", () => {
        let input1 = "BLAH BLAH";
        let input2 = "blah blah";
        let encode = true;
        let actual = polybius(input1, encode);
        let expected = polybius(input2, encode);
        expect(actual).to.equal(expected);
    });
    it("should translate i/j to 42 when encoding", () => {
        let input = "i j";
        let expected = "42 42";
        let actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should maintain the space when decoding", () => {
        let input = "3251131343 2543241341 3251131343 2543241341";
        let expected = "hello world hello world";
        let encode = false;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it("should maintain the space when encoding", () => {
        let input = "hello world hello world";
        let expected = "3251131343 2543241341 3251131343 2543241341";
        let encode = true;
        let actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it("should return false if the return number is odd when decoding", () => {
        let input = "443242335212541";
        let encode = false;
        let actual = polybius(input, encode)
        expect(actual).to.be.false;
    });
})