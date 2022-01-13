import React, { PureComponent } from 'react'
import { SafeAreaView } from 'react-native'
import { IPageProps } from '../../types'
import { withTranslation } from 'react-i18next'
import UserNameField from './userNameField'
import PasswordField from './passwordField'
import ActionButton from './actionButton'

class Login extends PureComponent<IPageProps> {
  render() {
    return (
      <SafeAreaView>
        <UserNameField />
        <PasswordField />
        <ActionButton />
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Login)
