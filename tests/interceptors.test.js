// import { interceptorForRequest, interceptorForResponse } from "../interceptors";
import * as interceptors from "../interceptors";

describe("testing interceptor for request", () => {
  const defaultInterceptorForRequest = jest.spyOn(
    interceptors,
    "interceptorForRequest"
  );
  defaultInterceptorForRequest();
  test("checking if return is ok", () => {
    expect(defaultInterceptorForRequest.resol).toBeInstanceOf(Function);
  });
});
// describe("testing interceptor for response", () => {});
