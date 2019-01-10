'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./sign-up/events.js')
const gameEvents = require('./game-logic/events.js')
const gameApiEvents = require('./gameApiEvents/events.js')

$(() => {
  // Hide board on page load
  $('.game-board').hide()
  // hide buttons on page load
  $('#reset-button').hide()
  $('#get-games').hide()
  $('#create-game').hide()
  $('#change-pw-button').hide()
  $('#sign-out').hide()
  // User authentication buttons
  $('#user-sign-up').on('submit', events.onSignUp)
  $('#user-sign-in').on('submit', events.onSignIn)
  $('#user-change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  // game-board functionality
  $('#one').on('click', function () { gameEvents.onClick('#one', 0) })
  $('#two').on('click', function () { gameEvents.onClick('#two', 1) })
  $('#three').on('click', function () { gameEvents.onClick('#three', 2) })
  $('#four').on('click', function () { gameEvents.onClick('#four', 3) })
  $('#five').on('click', function () { gameEvents.onClick('#five', 4) })
  $('#six').on('click', function () { gameEvents.onClick('#six', 5) })
  $('#seven').on('click', function () { gameEvents.onClick('#seven', 6) })
  $('#eight').on('click', function () { gameEvents.onClick('#eight', 7) })
  $('#nine').on('click', function () { gameEvents.onClick('#nine', 8) })
  // Game Api request
  $('#get-games').on('click', gameApiEvents.onGetGames)
  $('#create-game').on('click', gameApiEvents.onCreateGame)
  $('#reset-button').on('click', gameApiEvents.onCreateGame)
})
