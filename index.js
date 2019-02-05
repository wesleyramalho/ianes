const axios = require("axios");

module.exports = function requestHandler(url) {
  return axios
    .get(url)
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};