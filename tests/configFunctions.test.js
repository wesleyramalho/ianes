import {
  setBaseUrl,
  setAuthorizationHeader,
  resetAuthorizationHeader,
  setDefaultContentType,
  setDefaultTimeOut
} from "../configFunctions";

describe("possible values to base url", () => {
  test("setting a null value to base url", () => {
    expect(setBaseUrl(null)).toBe(null);
  });
  test("setting a non empty value to base url", () => {
    expect(setBaseUrl("mybaseurl.com")).toBe("mybaseurl.com");
  });
});

describe("possible values to Authorization header", () => {
  test("setting a null value to Authorization header", () => {
    expect(setAuthorizationHeader(null)).toBe(null);
  });
  test("setting a non empty value to Authorization header", () => {
    expect(setAuthorizationHeader("Bearer MYWEBTOKENANDITSVALUES")).toBe(
      "Bearer MYWEBTOKENANDITSVALUES"
    );
  });
  test("resetting Authorization header", () => {
    expect(resetAuthorizationHeader()).toBeUndefined();
  });
});

describe("possibles values to default content type", () => {
  test("setting a null value to default content type", () => {
    expect(setDefaultContentType(null)).toBe(null);
  });
  test("setting a non empty value to default content type", () => {
    expect(setDefaultContentType("text/html")).toBe("text/html");
  });
});

describe("possible values to default timeout", () => {
  test("setting a null value to default timeout", () => {
    expect(setDefaultTimeOut(null)).toBe(null);
  });
  test("setting a integer number to default timeout", () => {
    expect(setDefaultTimeOut(23000)).toBe(23000);
  });
  test("setting a non integer number to default timeout", () => {
    expect(setDefaultTimeOut(23000.13)).toBe(null);
  });
  test("setting a string to default timeout", () => {
    expect(setDefaultTimeOut("onetwo")).toBe(null);
  });
});
