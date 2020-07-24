const axios = require("axios");

module.exports = {
    findBook: function (req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyD-sPUrvKq_F_-pld1fxyNjHIL2uVIywM0")
        .then(dbModel => res.json(dbModel))
      } 
    }