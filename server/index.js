const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
const controller = require('./controllers/giphy_controllers')
const gamesController = require('./controllers/games')

const port = process.env.PORT || 3005

const app = express()

process.on('unhandledRejection', (message, p) => {
  console.log(message)
  console.log(p)
})

app.use(express.static(__dirname + '/../public/build'))

app.use(json())
app.use(cors())

app.post('/api/getApiData', controller.getApiData)
app.put('/api/newGame', gamesController.newGame)
app.get('/api/game/:id', gamesController.getGame)
app.delete('/api/game/:id', gamesController.deleteGame)

app.listen(port, () => {
  console.log(`Listening in port: ${port}`)
})
