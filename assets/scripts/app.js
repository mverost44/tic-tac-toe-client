'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./sign-up/events.js')

$(() => {
  $('#user-sign-up').on('submit', events.onSignUp)
  $('#user-sign-in').on('submit', events.onSignIn)
  $('#user-change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
})
