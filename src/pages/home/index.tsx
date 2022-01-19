import React, { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native'
import { IPageProps } from '../../types/applicationTypes'
import WelcomeMessage from './welcomeMessage'
import LogoutButton from './logout'

class Home extends PureComponent<IPageProps> {
  render() {
    return (
      <SafeAreaView>
        <WelcomeMessage />
        <LogoutButton />
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Home)
