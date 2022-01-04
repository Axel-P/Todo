import React, { PureComponent } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { ScreenNavigationProp } from '../types'

export default class Home extends PureComponent<ScreenNavigationProp> {
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
