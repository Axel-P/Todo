import React, { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import { SafeAreaView, Text, Button } from 'react-native'
import { IPageProps } from '../types'

class Home extends PureComponent<IPageProps> {
  private logout = (): void => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
        <Button onPress={this.logout} title={'Logout'} />
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Home)
