const axios = require('axios')

let votes = []

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

module.exports = {
  getVotes
}
