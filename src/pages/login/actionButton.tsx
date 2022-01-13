import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import userNameVar from '../../api/localFields/user/userName'
import passwordVar from '../../api/localFields/user/password'
import { useLazyQuery, useReactiveVar } from '@apollo/client'
import GET_USER_ACCOUNT from '../../api/queries/getUserAccount'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'

const ActionButton: FunctionComponent = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { t } = useTranslation()
  const userName = useReactiveVar(userNameVar)
  const password = useReactiveVar(passwordVar)
  const [getUsers, { loading }] = useLazyQuery(GET_USER_ACCOUNT, {
    onCompleted: ({ getUserAccount }) => {
      if (getUserAccount) {
        navigate('Home')
      }
    },
  })

  return (
    <Button
      onPress={() => {
        getUsers({
          variables: { userName, password },
        })
      }}
      title={t('actions.login')}
      disabled={loading}
    />
  )
}

export default ActionButton
