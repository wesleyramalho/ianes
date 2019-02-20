![Ianes](./img/ianes.png)

## Ianes - A request handler based on [axios](https://github.com/axios/axios "Axios")

[![npm version](https://img.shields.io/badge/npm-0.1.1-yellowgreen.svg)](https://www.npmjs.org/package/ianes)
[![Statements coverage](https://img.shields.io/badge/Statements%20Coverage-82.14%25-green.svg)](./coverage/index.html)

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

If you're using React, we recommend you to configure IANES in some of the entry point of your application. In our example, it was made in the file that contains all the possible routes.

```js
//others imports
import { configureIanes } from "ianes/modules";

const API_URL = "http://localhost:3000/api";

const configurations = {
  apiUrl: API_URL,
};

configureIanes(configurations);
//more code...
```

## Configurations

By default,`handleResponseDataSuccess` and `handleResponseError` are initialized with [default handlers functions](./requestHandlers.js). Also, `defaultContentType` and `defaultTimeout` are initialized with `application/json` and  `240000`, respectively.

The `configureIanes` functions accept the following properties:

```js
{
  //default base url used in requests
  apiUrl: "https://myapiurl.com",
  
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

Setting token through `setAuthorizationHeader` makes that `Authorization` header sent in requests uses the value passed by it.

```js
import { setAuthorizationHeader } from "ianes/modules";

const token = "Bearer MYWEBTOKENAPIANDANOTHERSWORDS"
setAuthorizationHeader(token);

```

#### Reset Authorization Header

Resetting token through `resetAuthorizationHeader` makes that `Authorization` header stops being sent.

```js
import { resetAuthorizationHeader } from "ianes/modules";

resetAuthorizationHeader();

```

#### Get

```js
import { get } from "ianes/modules";

get("/teachers")
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

```

#### Post

```js
import { post } from "ianes/modules";

const student = { name: "John Mayer", age: 21 };

post("/students", student)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

#### Put

```js
import { put } from "ianes/modules";

const student = { id: 234432, name: "Marrie Mayer", age: 21 };

put(`/students/${student.id}`, student)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

#### Patch

```js
import { patch } from "ianes/modules";

const student = { id: 234432, name: "Marrie Mayer", age: 21 };

patch(`/students/${student.id}`, { name: "Larry" })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

#### Remove (delete)

```js
import { remove } from "ianes/modules";

const student = { id: 234432, name: "Marrie Mayer", age: 21 };

remove(`/students/${student.id}`)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

<!--
#### Request 

```js
import { request } from "ianes/modules";

//...

```

#### Head 

```js
import { request } from "ianes/modules";

//...

```

#### Options 


## Resources

* [Changelog]()
-->

## Credits

Ianes is heavily based on [axios](https://github.com/axios/axios).


