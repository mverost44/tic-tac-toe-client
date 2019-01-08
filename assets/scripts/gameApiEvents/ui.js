'use strict'

// const gameEvents = require('../game-logic/events.js')
const store = require('../store')

const onGetGamesSuccess = (response) => {
  $('#games-played').text(`Total games played: ${response.games.length}`)
}

const onGetGamesFailure = (response) => {
  console.log(response)
}

const onCreateGameSuccess = (response) => {
  store.game = response.game

  console.log(store.game)
  $('#user-message').text('')
  $(' ').replaceAll('p')

  $('#win-message').text('')
}
const onCreateGameFailure = (response) => {
  console.log('response is' + response)
  $('#user-message').text('Error creating a game.')
}

const onUpdateGameSuccess = (response) => {
  console.log(response)
  console.log(response.game)
}

const onUpdateGameFailure = (response) => {
  console.log(response)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onCreateGameFailure,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
