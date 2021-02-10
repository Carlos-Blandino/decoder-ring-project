// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("Substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitution("dog");
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("dog", "lmoknijbuhvygctfxrdzeswaq");
        const expected = false;
        expect(actual).to.equal(expected);
    })

    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution("thinkful", "plmoknijbuhvygctfxrdze$waq");
        const expected = "djbghnzv";
        expect(actual).to.equal(expected);
    })

    it("should work with any kind of key with unique characters when encoding", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    })

    //what is going on with this one
    it("should preserve spaces when encoding", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgruk$waflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    })

    it("should decode a message by using the given substitution alphabet", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibe$", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })

    it("should work with any kind of key with unique characters when decoding", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    })

    it("should preserve spaces when decoding", () => {
        const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgruk$waflnthdjpzibev", false);
        const expected = "you are an excellent spy";
        expect(actual).to.equal(expected);
    })

    it("alphabet should not contain duplicates", () => {
        const actual = substitution("thinkful", "plmoknljbuhvygctfxrdze$waq");
        const expected = false;
        expect(actual).to.equal(expected);
    })
})