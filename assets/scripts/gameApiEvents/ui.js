'use strict'

// const gameEvents = require('../game-logic/events.js')
const store = require('../store')

const onGetGamesSuccess = (response) => {
  $('#games-played').text(`Total games played: ${response.games.length}`)
}

const onGetGamesFailure = (response) => {
  // console.log(response)
}

const onCreateGameSuccess = (response) => {
  store.game = response.game
  store.turn = 0
  // console.log(store.game)

  $('.game-board').show()
  $('#user-message').text('')
  $(' ').replaceAll('p')

  $('#games-played').text('')
  $('#win-message').text('')
}
const onCreateGameFailure = (response) => {
  // console.log('response is' + response)
  $('#user-message').text('Error creating a game.')
}

const onUpdateGameSuccess = (response) => {
  store.game.cells = response.game.cells
  console.log(store.game.cells)
}

const onUpdateGameFailure = (response) => {
  // console.log(response)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onCreateGameFailure,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
