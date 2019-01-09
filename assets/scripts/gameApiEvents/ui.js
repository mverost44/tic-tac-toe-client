'use strict'

const store = require('../store')

const onGetGamesSuccess = (response) => {
  $('#games-played').text(`Total games played: ${response.games.length}`)
}

const onGetGamesFailure = (response) => {
  $('#games-played').text('Failed to get your games :{')
}

const onCreateGameSuccess = (response) => {
  store.game = response.game
  store.turn = 0

  $('.game-board').show()
  $('#user-message').text('Click a space to begin... Player 1 goes first!').css('color', 'white')
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
}

const onUpdateGameFailure = (response) => {
  $('#user-message').text('Failed to update game.  Please check your network connection.')
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onCreateGameFailure,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
