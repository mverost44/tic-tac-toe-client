'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
// const store = require('../store')

const onGetGames = (event) => {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

const onCreateGame = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = (id, value) => {
  api.updateGame(id, value)

    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onGetGames,
  onCreateGame,
  onUpdateGame
}
