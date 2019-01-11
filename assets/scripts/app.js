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
  $('#ai').hide()
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
  $('#1').on('click', function () { gameEvents.onClick('#1', 0) })
  $('#2').on('click', function () { gameEvents.onClick('#2', 1) })
  $('#3').on('click', function () { gameEvents.onClick('#3', 2) })
  $('#4').on('click', function () { gameEvents.onClick('#4', 3) })
  $('#5').on('click', function () { gameEvents.onClick('#5', 4) })
  $('#6').on('click', function () { gameEvents.onClick('#6', 5) })
  $('#7').on('click', function () { gameEvents.onClick('#7', 6) })
  $('#8').on('click', function () { gameEvents.onClick('#8', 7) })
  $('#9').on('click', function () { gameEvents.onClick('#9', 8) })
  // Game Api request
  $('#get-games').on('click', gameApiEvents.onGetGames)
  $('#create-game').on('click', gameApiEvents.onCreateGame)
  $('#reset-button').on('click', gameApiEvents.onCreateGame)
  // Ai game
  $('#ai').on('click', gameEvents.onAi)
})
