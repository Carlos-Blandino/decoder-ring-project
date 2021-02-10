// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect

describe("caesar", () => {

    it("should return false if shift equals 0", () => {
        const actual = caesar('Jackalope', 0);

        expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
        const actual = caesar('Jackalope', 26);

        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const actual = caesar('Jackalope', -26);

        expect(actual).to.be.false;
    });

    it("should return false if no shift value given", () => {
        const actual = caesar('Jackalope');

        expect(actual).to.be.false;
    });

    it("should maintain proper spacing", () => {
        const actual = caesar("Jackalope is awesome", 2);
        const expected = 20;

        expect(actual.length).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const actual = caesar("TeStInG", 2);
        const expected = "vguvkpi";

        expect(actual).to.equal(expected);
    });

    it("letters should wrap if shifted off the alphabet", () => {
        const actual = caesar("a", -4);
        const expected = "w";

        expect(actual).to.equal(expected);
    });

    it("letters should convert the letter appropriate to shift", () => {
        const actual = caesar("abc", 2);
        const expected = "cde";

        expect(actual).to.equal(expected);
    });

    it("should be able to decode", () => {
        const actual = caesar("cde", 2, false);
        const expected = "abc";

        expect(actual).to.equal(expected)
    });

    it("shouldn't change non-letters", () => {
        const actual = caesar("h-a", 2)
        const expected = "j-c";

        expect(actual).to.equal(expected);
    })
});