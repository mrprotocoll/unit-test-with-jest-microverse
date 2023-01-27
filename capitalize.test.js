const capitalize = require("./capitalize")

test("Capitalize first character", () => {
    const string = "damilare";

    const capitaliseString = capitalize(string);

    // test if string is a string
    expect(capitaliseString).toEqual("Damilare")
})