'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)

  $('#user-sign-up').trigger('reset')
  $('#signUpModal').modal('hide')
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  $('#user-sign-in').trigger('reset')
  $('#signInModal').modal('hide')
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)

  $('#user-change-password').trigger('reset')
  $('#changePasswordModal').modal('hide')
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
