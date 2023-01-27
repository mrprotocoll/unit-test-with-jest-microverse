const reverseString = require('./reverseString')

// test if they have the same length
test("test length of string after reversal", () => {
    // ARRANGE
    const string = "My name is Damilare"
    // ACT
    const reverse = reverseString(string)
    // Assert
    expect(reverse.length).toBe(string.length)
})