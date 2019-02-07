import axios from "axios";
import { interceptorForRequest, interceptorForResponse } from "./interceptors";
import { configureIanes } from "./configFunctions";
import { remove } from "./remove";

//exporting all modules for use in another pages and components
export { remove };
export { configureIanes };
export { interceptorForRequest as configureInterceptorForRequest };
export { interceptorForResponse as configureInterceptorForResponse };
export const { request, get, head, options, post, put, patch } = axios;
export { axios as ianes };
