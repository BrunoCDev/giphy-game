const axios = require('axios')

const { apiKey } = require('./../config')
const gamesController = require('./games')

const getApiData = (req, res) => {
  const { display, gameId, playerNumber } = req.body

  axios
    .get(`http://api.giphy.com/v1/gifs/search?q=${display}${apiKey}&limit=1`)
    .then(response => {
      const game = gamesController.games[gameId]
      game[`giphy${playerNumber}`] = response.data.data[0].images.original.webp

      return res.json(game)
    })
}

module.exports = {
  getApiData
}
