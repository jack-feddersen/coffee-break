/**
 * Your task is to write unit tests for a "FizzBuzz" function.
 * These should include tests to ensure the function returns the number itself if it is not divisible by 3 or 5,
 * that it returns "Fizz" if the number is divisible by 3, that it returns "Buzz" if the number is divisible by 5, and that it returns "FizzBuzz"
 * if the number is divisible by both 3 and 5. You should also consider writing tests for edge cases,
 * such as handling zero, negative numbers, and potentially invalid or non-integer inputs.
 * 
 * Please turn off any AI helping you with this task.
 * 
 * When divisible by 5 and 3, please return "FizzBuzz".
 * Complete this in a red, green, refactor process.
*/ 

const fizzBuzz = require("../src/fizzBuzz");

describe("fizzBuzz", () => {
  test("should return 1 when the input is 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  });

  test("should return fizz when input is 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  })

  test("should return buzz when input is 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("should return fizzbuzz when input is 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("should return Buzz when input is 25", () => {
    expect(fizzBuzz(25)).toBe("Buzz");
  })

  test("should return 11 when input is 11", () => {
    expect(fizzBuzz(11)).toBe(11);
  });
});
