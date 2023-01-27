const capitalize = require("./capitalize")

test("Capitalize first character", () => {
    const string = "damilare";

    const capitaliseString = capitalize(string);

    // test if string is a string
    expect(capitaliseString).toEqual("Damilare")
})

test("Test for a string", () => {
    const string = "tony";

    const regex = /\D+/;

    // test if string is a string
    expect(string).toMatch(regex)
})