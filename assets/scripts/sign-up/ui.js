'use strict'

const store = require('../store')

const onSignUpSuccess = () => {
  $('#user-message').text('Successfully signed up!').css('color', 'green')
}

const onSignUpFailure = () => {
  $('#user-message').text('Failed to create new user. Please try again.').css('color', 'red')
}

const onSignInSuccess = (response) => {
  $('#user-message').text('Signed In!').css('color', 'green')
  store.user = response.user
  console.log(store.user)
}

const onSignInFailure = (response) => {
  $('#user-message').text('Incorrect Username/Password. Please try again.').css('color', 'red')
}

const onChangeSuccess = () => {
  $('#user-message').text('Password successfully changed!').css('color', 'green')
}

const onChangeFailure = () => {
  $('#user-message').text('Error. Try AGAIN').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text('Successfully Logged Out').css('color', 'green')
  store.user = null
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
