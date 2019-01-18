const fs = require('fs');

module.exports = {
  get: (req, res) => {
    res.send("Ugh... that's the wrong request type :(");
  },
  post: (req, res) => {
    console.log(req.body);
    res.send('Got a POST request!');
  }
};
