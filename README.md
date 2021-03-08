# ITech-Wrapper

https://api.i-tech.id api wrapper

# Installation

```sh
$ npm i itech-wrapper
```

[![NPM](https://nodei.co/npm/itech-wrapper.png)](https://nodei.co/npm/itech-wrapper/)

# About

https://api.i-tech.id api wrapper with typescript
read _[docs](https://itzngga.github.io/itech-wrapper)_ here

# Examples

```js
const api = require("itech-wrapper").key("YOUR_X_APIKEY");
const profileJSON = await api.getProfile();

api.facebookScraper("x_link").then((res) => {
  // manipulate json
});
```
