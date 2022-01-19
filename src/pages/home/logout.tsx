import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import { useApolloClient } from '@apollo/client'
import passwordVar from '../../api/localFields/user/password'
import userNameVar from '../../api/localFields/user/userName'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/applicationTypes'

const ActionButton: FunctionComponent = () => {
  const { t } = useTranslation()
  const client = useApolloClient()
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const handleLogout = () => {
    console.log('handle logout')
    client.resetStore()
    userNameVar('')
    passwordVar('')
    navigate('Login')
  }

  return <Button onPress={handleLogout} title={t('actions.logout')} />
}

export default ActionButton
