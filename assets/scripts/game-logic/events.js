'use strict'

const apiEvents = require('./../gameApiEvents/events.js')
const store = require('./../store')

store.turn = 0

const turnCount = function () {
  store.turn += 1
  if (store.turn >= 5) {
    checkForWin()
  }
}
// console.log(turn)

const endGame = function () {
  store.game.over = true
  $('#user-message').text('')
  // console.log(store.game.over)
  store.turn = 0
  store.game.cells = ['', '', '', '', '', '', '', '', '']
}
// Game logic
const checkPlayer = function (winner) {
  if (winner === 'X') {
    $('#win-message').text('Player 1 Wins!')
    $('#user-message').text(' ')
    endGame()
  } else if (winner === 'O') {
    $('#win-message').text('Player 2 Wins!')
    $('#user-message').text(' ')
    endGame()
  }
}

const checkForWin = function () {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '') {
    checkPlayer(store.game.cells[3])
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    checkPlayer(store.game.cells[6])
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    checkPlayer(store.game.cells[1])
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    checkPlayer(store.game.cells[2])
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    checkPlayer(store.game.cells[0])
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') {
    checkPlayer(store.game.cells[2])
  } else if (store.game.cells.every(function (e) { return e !== '' })) {
    $('#win-message').text('Game is a Draw')
    endGame()
  } else {
    return false
  }
}

const onClick = function (id, cellNum) {
  // prevent gameplay after game has ended
  if (store.game.over === true) {
    return $('#win-message').text('Want to play again? Click on Reset Game!')
  } else
  // prevent occupied cell from being changed
  if ($(id).is(":contains('X')") || $(id).is(":contains('O')")) {
    return $('#user-message').text('Please choose an empty cell!')
    // turns alternate player
  } else if (store.turn % 2 === 0) {
    $(id).append('<p class="xo">X</p>')
    $('#user-message').text('Player 2\'s turn')
    apiEvents.onUpdateGame(cellNum, 'X')
    // Add player indentifier to correct cell space
    store.game.cells.splice(cellNum, 1, 'X')
    turnCount()
  } else if (store.turn % 2 === 1) {
    $(id).append('<p class="xo">O</p>')
    $('#user-message').text('Player 1\'s turn')
    apiEvents.onUpdateGame(cellNum, 'O')
    store.game.cells.splice(cellNum, 1, 'O')
    // console.log(store.game.cells)
    turnCount()
  }
}

module.exports = {
  onClick,
  checkForWin
}
