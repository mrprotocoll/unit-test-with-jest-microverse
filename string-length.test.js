const stringLength = require('./string-length')

test("Length of string with empty parameter", () => {
    // Arrange
    const emptyString = "";
    // Act
    const checkLength = string => stringLength(string);
    // Assert
    expect(() => checkLength(emptyString)).toThrow(Error);
})

test("Length of string within expected range 1 - 10", () => {
    // Arrange
    const string = "the name ";
    // Act
    const checkLength = stringLength(string);
    // Assert
    expect(checkLength).toBe(8);
})

test("Length of string greater than 10", () => {
    // Arrange
    const string = "the name is";
    // Act
    const checkLength = string => stringLength(string);
    // Assert
    expect(() => checkLength(string)).toThrow("String must not be more than 10 characters");
})