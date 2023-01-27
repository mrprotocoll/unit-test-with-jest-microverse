const Calculator = require("./calculator");

describe("Calculator", () => {
    describe("Add", () => {
        const calculator = new Calculator(3,6);

        const add = calculator.add();

        // test if answer is correct
        test("3 + 6 is equals 9", () => {
            expect(add).toBe(9)
        })

        // test if result is a number 
        test("3 + 6 is a number", () => {
            expect(add === 9).toBeTruthy()
        })

        test("3 + 6 is valid", () => {
            expect(add).not.toBeUndefined()
        })

    })

    describe("Subtract", () => {
        const calculator = new Calculator(6,3);

        const subtract = calculator.subtract();

        // test if answer is correct
        test("6 - 3 is equals 3", () => {
            expect(subtract).toBe(3)
        })

        // test if result is a number 
        test("6 - 3 is a number", () => {
            expect(subtract === 3).toBeTruthy()
        })

        test("6 - 3 is valid", () => {
            expect(subtract).not.toBeUndefined()
        })
    })

    describe("Multiply", () => {
        const calculator = new Calculator(6,3);

        const multiply = calculator.multiply();

        // test if answer is correct
        test("6 * 3 is equals 18", () => {
            expect(multiply).toBe(18)
        })

        // test if result is a number 
        test("6 * 3 is a number", () => {
            expect(multiply === 18).toBeTruthy()
        })

        test("6 * 3 is valid", () => {
            expect(multiply).not.toBeUndefined()
        })
    })

    describe("Divide", () => {
        const calculator = new Calculator(6,3);

        const divide = calculator.divide();

        // test if answer is correct
        test("6 / 3 is equals 2", () => {
            expect(divide).toBe(2)
        })

        // test if result is a number 
        test("6 / 3 is a number", () => {
            expect(divide).not.toBeNull()
        })

        test("6 / 3 is valid", () => {
            expect(calculator.y).not.toBe(0)
        })
    })
})