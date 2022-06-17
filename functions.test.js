let functions = require('./functions');

test("Return Two test", () => {
    expect(functions.returnTwo()).toBe(2)
})

test("Add Test", () => {
    expect(functions.add(1,2)).toEqual(3)
})

test("Add Test", () => {
    expect(functions.add(5,9)).toEqual(14)
})

describe("Greeting Test", () => {
    test("James", () => {
        expect(functions.greeting('James')).toEqual('Hello, James.')
    })
    test("Jill", () => {
        expect(functions.greeting('Jill')).toEqual('Hello, Jill.')
    })
})