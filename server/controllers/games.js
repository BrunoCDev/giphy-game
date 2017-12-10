const axios = require('axios')

const games = []

const newGame = (req, res) => {
  const game = {
    giphy1: '',
    giphy2: '',
    votesUrl: ''
  }

  const nextGameId = games.length

  const options = {
    title: `Giphy Game #${nextGameId}`,
    options: ['Player 1', 'Player 2'],
    multi: false
  }

  // create strawpool game
  // save
  axios.post('https://strawpoll.me/api/v2/polls', options).then(response => {
    game.strawpollId = response.data.id

    games.push(game)

    res.json(nextGameId)
  })
}

const getGame = (req, res) => {
  const { id } = req.params
  const game = games[id]

  if (!game) return res.json({ error: 'Game not found.' })
  axios.get(`https://strawpoll.me/api/v2/polls/${game.strawpollId}`).then(response => {
    const updatedGame = Object.assign(game, { votes: response.data.votes })
    games[id] = updatedGame
    res.json(updatedGame)
  })
}

module.exports = {
  newGame,
  getGame
}
