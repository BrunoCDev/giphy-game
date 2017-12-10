const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const controller = require('./controllers/giphy_controllers')
const controllerVotes = require('./controllers/votescontroller')

const port = 3005

const app = express()

process.on('unhandledRejection', (message, p) => {
  console.log(message)
  console.log(p)
})

// app.use(express.static(__dirname + '/../public/build'))

app.use(json())
app.use(cors())

app.post('/api/getApiData', controller.getApiData)
app.get('/api/getVotes/:id', controllerVotes.getVotes)
app.get('/api/newGame', controllerVotes.newGame)

app.listen(port, () => {
  console.log(`Listening in port: ${port}`)
})
