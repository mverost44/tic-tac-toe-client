'use strict'

const store = require('../store')

const onSignUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
}

const onSignUpFailure = () => {
  $('#user-message').text('Failed to create new user. Please try again.').css('color', 'red')
}

const onSignInSuccess = (response) => {
  $('#user-message').text('Successfully signed in.  Click \'Create New Game\' to play!')
  store.user = response.user
  // console.log(store.user)

  $('.start-text').hide()
  $('#get-games').show()
  $('#create-game').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#change-pw-button').show()
  $('#sign-out').show()
}

const onSignInFailure = (response) => {
  $('#user-message').text('Incorrect Username/Password. Please try again.').css('color', 'red')
}

const onChangeSuccess = () => {
  $('#user-message').text('Password successfully changed!')
}

const onChangeFailure = () => {
  $('#user-message').text('Error. Try AGAIN').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Signed out. Sign back in to play again!')
  $('#games-played').text('')
  $('#win-message').text('')
  store.user = null

  $('.game-board').hide()
  $('#reset-board').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#change-pw-button').hide()
  $('#sign-out').hide()
  $('#get-games').hide()
  $('#create-game').hide()
  $('.start-text').show()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess
}
