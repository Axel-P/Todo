import React, { PureComponent } from 'react'
import { SafeAreaView, TextInput, Button } from 'react-native'
import { ScreenNavigationProp } from '../types'

export default class Login extends PureComponent<ScreenNavigationProp> {
  private login = (): void => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput placeholder={'Username'} placeholderTextColor={'black'} />
        <TextInput
          placeholder={'Password'}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
        <Button onPress={this.login} title={'Login'} />
      </SafeAreaView>
    )
  }
}
