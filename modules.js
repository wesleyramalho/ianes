import axios from "axios";
import { configureIanes, setAuthorizationHeader, resetAuthorizationHeader } from "./src/configFunctions";
import { remove } from "./src/remove";


//exporting all modules for use in another pages and components
export { remove };
export { configureIanes, setAuthorizationHeader, resetAuthorizationHeader };
export const { request, get, head, options, post, put, patch } = axios;
export { axios as ianes };
