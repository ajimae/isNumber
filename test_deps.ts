import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { isNumber } from "./mod.ts";

// regular checks
const numberOne = isNumber(5);
const numberTwo = isNumber('5');
const numberThree = isNumber({});
const numberFour = isNumber([5]);
const numberFive = isNumber(true);

// console.log(numberOne + '\n' + numberTwo + '\n' + numberThree + '\n' +numberFour+ '\n' + numberFive + '\n');

// special checks
const negative = isNumber(-1);
const veryLargeNumber = isNumber(Number.MAX_VALUE);
const verySmallNumber = isNumber(Number.MIN_VALUE);
const decimalNumber = isNumber(0.1 + 0.2);

// regular tests
Deno.test("testiing first input", function test(): void {
  assertEquals(numberOne, true);
});

Deno.test("testing second input", function test(): void {
  assertEquals(numberTwo, false);
});

Deno.test("testing third input", function test(): void {
  assertEquals(numberThree, false);
});

Deno.test("testing fourth input", function test(): void {
  assertEquals(numberFour, false);
});

Deno.test("testing fifth input", function test(): void {
  assertEquals(numberFive, false);
});

// special test
Deno.test("testiing first special input", function test(): void {
  assertEquals(negative, true);
});

Deno.test("testing second special input", function test(): void {
  assertEquals(veryLargeNumber, true);
});

Deno.test("testing third special input", function test(): void {
  assertEquals(verySmallNumber, true);
});

Deno.test("testing third special input", function test(): void {
  assertEquals(decimalNumber, true);
});
