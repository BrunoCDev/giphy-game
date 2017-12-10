const axios = require('axios')

let votes = []

const games = []

const getVotes = (req, res) => {
  if (votes.length === 0) {
    const { id } = req.params
    axios.get(`https://strawpoll.me/api/v2/polls/${id}`).then(response => {
      res.json(response.data.votes)
    })
  } else {
    res.json(votes)
  }
}

const newGame = (req, res) => {
  const game = {
    giphy1: '',
    giphy2: '',
    votes: [0, 0]
  }
  games.push(game)
  res.json(games.length - 1)
}

module.exports = {
  getVotes,
  newGame
}
