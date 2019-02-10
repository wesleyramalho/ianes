import { isNumber } from "../utils";

describe("possibles values to isNumber function", () => {
  test("passing a string to isNumber function", () => {
    expect(isNumber("1234")).toEqual(false);
  });
  test("passing a integer number to isNumber function", () => {
    expect(isNumber(1234)).toEqual(true);
  });
});

describe("testing hasCompleteResponse possible values", () => {
  let hasCompleteResponseMockFunction = jest.fn();
  const response = {
    status: 444,
    statusText: "No response",
  };
  hasCompleteResponseMockFunction(response);
  expect(hasCompleteResponseMockFunction).toBeCalledWith(
    expect.objectContaining({
      status: expect.any(Number),
      statusText: expect.any(String)
    })
  );
});
