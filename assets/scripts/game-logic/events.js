'use strict'

const apiEvents = require('./../gameApiEvents/events.js')
const store = require('./../store')

let cells = ['', '', '', '', '', '', '', '', '']

let turn = 0
const turnCount = function () {
  turn += 1
  if (turn >= 5) {
    checkForWin()
  }
}
// console.log(turn)

const endGame = function () {
  store.game.over = true
  $('#user-message').text('')
  // console.log(store.game.over)
  turn = 0
  cells = ['', '', '', '', '', '', '', '', '']
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
  if (cells[0] === cells[1] && cells[1] === cells[2] && cells[0] !== '') {
    checkPlayer(cells[0])
  } else if (cells[3] === cells[4] && cells[4] === cells[5] && cells[3] !== '') {
    checkPlayer(cells[3])
  } else if (cells[6] === cells[7] && cells[7] === cells[8] && cells[6] !== '') {
    checkPlayer(cells[6])
  } else if (cells[0] === cells[3] && cells[3] === cells[6] && cells[0] !== '') {
    checkPlayer(cells[0])
  } else if (cells[1] === cells[4] && cells[4] === cells[7] && cells[1] !== '') {
    checkPlayer(cells[1])
  } else if (cells[2] === cells[5] && cells[5] === cells[8] && cells[2] !== '') {
    checkPlayer(cells[2])
  } else if (cells[0] === cells[4] && cells[4] === cells[8] && cells[0] !== '') {
    checkPlayer(cells[0])
  } else if (cells[2] === cells[4] && cells[4] === cells[6] && cells[2] !== '') {
    checkPlayer(cells[2])
  } else if (cells.every(function (e) { return e !== '' })) {
    $('#win-message').text('Game is a Draw')
    endGame()
  } else {
    return false
  }
}

const onClick = function (id, cellNum) {
  // prevent gameplay after game has ended
  if (store.game.over === true) {
    return $('#win-message').text('Want to play again? Click Create New Game!')
  } else
  // prevent occupied cell from being changed
  if ($(id).is(":contains('X')") || $(id).is(":contains('O')")) {
    return $('#user-message').text('Please choose an empty cell!')
    // turns alternate player
  } else if (turn % 2 === 0) {
    $(id).append('<p class="xo">X</p>')
    $('#user-message').text('Player 2\'s turn')
    apiEvents.onUpdateGame(cellNum, 'X')
    // Add player indentifier to correct cell space
    cells.splice(cellNum, 1, 'X')
    turnCount()
  } else if (turn % 2 === 1) {
    $(id).append('<p class="xo">O</p>')
    $('#user-message').text('Player 1\'s turn')
    apiEvents.onUpdateGame(cellNum, 'O')
    cells.splice(cellNum, 1, 'O')
    // console.log(cells)
    turnCount()
  }
}

module.exports = {
  onClick,
  checkForWin
}
