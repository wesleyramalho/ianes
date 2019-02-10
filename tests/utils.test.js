import { isNumber } from "../utils";

describe("possibles values to isNumber function", () => {
  test("passing a string to isNumber function", () => {
    expect(isNumber("1234")).toEqual(false);
  });
  test("passing a integer number to isNumber function", () => {
    expect(isNumber(1234)).toEqual(true);
  });
});
