import React, { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import { SafeAreaView, Button } from 'react-native'
import { IPageProps } from '../../types'
import WelcomeMessage from './welcomeMessage'

class Home extends PureComponent<IPageProps> {
  private logout = (): void => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <SafeAreaView>
        <WelcomeMessage />
        <Button onPress={this.logout} title={'Logout'} />
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Home)
