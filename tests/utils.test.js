import * as utils from "../utils";

describe("possibles values to isNumber function", () => {
  test("passing a string to isNumber function", () => {
    expect(utils.isNumber("1234")).toEqual(false);
  });
  test("passing a integer number to isNumber function", () => {
    expect(utils.isNumber(1234)).toEqual(true);
  });
});

describe("testing hasCompleteResponse possible values", () => {
  const hasCompleteResponseMockFunction = jest.spyOn(
    utils,
    "hasCompleteResponse"
  );

  test("passing complete and incomplete response object as parameter", () => {
    const completeResponse = {
      status: 444,
      statusText: "No response"
    };
    const incompleteResponse = null;
    hasCompleteResponseMockFunction(completeResponse);
    hasCompleteResponseMockFunction(incompleteResponse);
    expect(hasCompleteResponseMockFunction).toBeCalledWith(
      expect.objectContaining({
        status: expect.any(Number),
        statusText: expect.any(String)
      })
    );
  });

 
});
