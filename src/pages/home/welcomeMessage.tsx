import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import userNameVar from '../../api/localFields/user/userName'
import passwordVar from '../../api/localFields/user/password'
import { useApolloClient, useReactiveVar } from '@apollo/client'
import GET_USER_ACCOUNT from '../../api/queries/getUserAccount'

const WelcomeMessage: FunctionComponent = () => {
  const { t } = useTranslation()
  const client = useApolloClient()
  const userName = useReactiveVar(userNameVar)
  const password = useReactiveVar(passwordVar)
  const { getUserAccount } = client.readQuery({
    query: GET_USER_ACCOUNT,
    variables: { userName, password },
  })

  return <Text>{`${t('pages:home.welcome')} ${getUserAccount.firstname}`}</Text>
}

export default WelcomeMessage
