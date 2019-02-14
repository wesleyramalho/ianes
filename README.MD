![Ianes](./img/ianes.png)

## Ianes - A request handler based on [axios](https://github.com/axios/axios "Axios")

[![npm version](https://img.shields.io/badge/npm-v.0.0.0-yellow.svg)](https://www.npmjs.org/package/ianes)
[![Statements coverage](https://img.shields.io/badge/Statements%20Coverage-77.8%25-yellowgreen.svg)](https://coveralls.io/r/mzabriskie/axios)

> IANES is a wrapper for [axios](https://github.com/axios/axios "Axios"), a promise based HTTP client for the browser and node.js. Built with :heart:.

## Features

- Easy configuration for global Authorization Header
- Easy connfiguration for global apiUrl
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data

## Installing

Using yarn:

```bash
$ yarn add ianes
```

Using npm:

```bash
$ npm install ianes
```

## Getting Started

If your're using React, we recommend you to configure IANES in some of the entry point of your application. In our example, it was made in the file that contains all the possible routes.

```js
//others imports
import { configureIanes } from "ianes/modules";

const API_URL = "http://localhost:3000/api";
const DEFAULT_CONTENT_TYPE = "application/json";
const DEFAULT_TIMEOUT = 240000;

const configurations = {
  apiUrl: API_URL,
  defaultContentType: DEFAULT_CONTENT_TYPE,
  defaultTimeout: DEFAULT_TIMEOUT,
};

configureIanes(configurations);
//more code...
```

## Configurations

By default,`handleResponseDataSuccess` and `handleResponseError` are initialized with [default handlers functions](./requestHandlers.js). Also, `defaultContentType` and `defaultTimeout` are initialized with `application/json` and  `240000`, respectively.

The configureIanes method accept the following properties:

```js
{
  //default base url used in requests
  apiUrl: "https://myapiurl.com/",
  
  //It will be used in the Authorization header in all requests sent
  apiToken: "Bearer MYWEBTOKENAPIANDANOTHERSWORDS",
  
  //Content type to be used in requests sent
  defaultContentType: "application/json",
  
  //defaultTimeout should be a number
  defaultTimeout: 240000,
  
  //handleBeforeTheRequestIsSent expects a function that should return the config object
  handleBeforeTheRequestIsSent: config => config,
  
  //handleRequestError expects a function that must return a promise
  handleRequestError: error => Promise.reject(error),
  
  //handleResponseDataSuccess expects a function that should return response
  handleResponseDataSuccess: response => (response),
  
  //handleRequestError expects a function that must return a promise with the error object
  handleResponseError: error => Promise.reject(error)
}
```

## Examples

#### Set Authorization Header
Setting token through `setAuthorizationHeader` makes that Authorization header sent in requests uses the value passed by it.

```js
import { setAuthorizationHeader } from "ianes/modules";

const token = "Bearer MYWEBTOKENAPIANDANOTHERSWORDS"
setAuthorizationHeader(token);

```

#### Reset Authorization Header
```js
import { resetAuthorizationHeader } from "ianes/modules";

//
resetAuthorizationHeader();

```


#### Get
#### Post
#### Put
#### Patch
#### Remove (delete)
#### Request 
#### Head 
#### Options 



## Resources

* [Changelog]()

## Credits

Ianes is heavily based on [axios](https://github.com/axios/axios).


