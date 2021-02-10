// Write your tests here!

const polybius = require("../src/polybius.js");
const expect = require("chai").expect


describe("polybius", () => {
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybius('325', false);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("i and j share a value key of 42 and both are shown when decoding", () => {
        const actual = polybius('4432423352125413', false);
        const expected = 'th(i/j)nkful';
        expect(actual).to.equal(expected);
    });

    it("should maintain spacing when decoding", () => {
        const actual = polybius('2345 23513434112251', false);
        const expected = 'my message';
        expect(actual).to.equal(expected);
    });

    it("i and j turns to 42 when endoding", () => {
        const actual = polybius('thinkful', true);
        const expected = '4432423352125413';
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const actual = polybius('Cat Hat', true);
        const expected = '311144 321144';
        expect(actual).to.equal(expected);
    })
    it("should maintain spacing when encoding", () => {
        const actual = polybius('Hello world', true);
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });

})