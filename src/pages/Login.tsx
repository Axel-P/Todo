import React, { PureComponent } from 'react'
import { SafeAreaView, TextInput, Button } from 'react-native'
import { IPageProps } from '../types'
import { withTranslation } from 'react-i18next'

class Login extends PureComponent<IPageProps> {
  private login = (): void => {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          placeholder={this.props.t('inputs.username')}
          placeholderTextColor={'black'}
        />
        <TextInput
          placeholder={this.props.t('inputs.password')}
          placeholderTextColor={'black'}
          secureTextEntry={true}
        />
        <Button onPress={this.login} title={this.props.t('actions.login')} />
      </SafeAreaView>
    )
  }
}

export default withTranslation()(Login)
