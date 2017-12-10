const axios = require('axios')

const { apiKey } = require('./../config')

let getApiData = (req, res) => {
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=${req.body
        .display}${apiKey}&limit=1`
    )
    .then(response => {
      return res.json(response.data)
    })
}

module.exports = {
  getApiData,
}
