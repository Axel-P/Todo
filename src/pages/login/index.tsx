import React, { PureComponent } from 'react'
import { SafeAreaView } from 'react-native'
import { IPageProps } from '../../types/applicationTypes'
import { withTranslation } from 'react-i18next'
import { Text } from 'react-native'
import Auth from '../../Auth'

class Login extends PureComponent<IPageProps> {
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      console.log('is authenticated!')
    } else {
      console.log('is not authenticated!')
      Auth.login()
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Redirecting you to login!</Text>
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Login)
