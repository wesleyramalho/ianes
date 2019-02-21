import * as requestHandlers from "../requestHandlers";

describe("testing defaultBeforeTheRequestIsSentHandler", () => {
  test("testing if defaultBeforeTheRequestIsSentHandler is returning an object", () => {
    expect(
      requestHandlers.defaultBeforeTheRequestIsSentHandler()
    ).toMatchObject({});
  });
});

describe("testing defaultSuccessResponseHandler", () => {
  test("testing if defaultSuccessResponseHandler is returning an object", () => {
    expect(requestHandlers.defaultSuccessResponseHandler()).toMatchObject({});
  });
});

describe("testing defaultRequestErrorHandler", () => {
  test("testing if defaultRequestErrorHandler is returning a Promise", () => {
    const mockRequest = jest.spyOn(
      requestHandlers,
      "defaultRequestErrorHandler"
    );
    return expect(mockRequest()).rejects.toEqual({
      status: 444,
      statusText: "No response"
    });
  });
});

describe("testing defaultErrorResponseHandler", () => {
  const defaultErrorResponseHandlerMockFunction = jest.spyOn(
    requestHandlers,
    "defaultErrorResponseHandler"
  );

  test("passing complete and incomplete response object as parameter", () => {
    const errorWithCompleteResponse = {
      response: {
        status: 444,
        statusText: "No response"
      }
    };
    const errorWithIncompleteResponse = {};
    defaultErrorResponseHandlerMockFunction(errorWithCompleteResponse).catch(
      error => error
    );
    defaultErrorResponseHandlerMockFunction(errorWithIncompleteResponse).catch(
      error => error
    );
    expect(defaultErrorResponseHandlerMockFunction).toBeCalledWith(
      expect.objectContaining({
        response: {
          status: expect.any(Number),
          statusText: expect.any(String)
        }
      })
    );
    expect(defaultErrorResponseHandlerMockFunction).toBeCalledWith(
      expect.objectContaining({})
    );
  });
});
