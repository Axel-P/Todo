import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'
import GET_USER_ACCOUNT from '../../api/queries/getUserAccount'
import { getUserAccount } from '../../types/graphql/getUserAccount'

const WelcomeMessage: FunctionComponent = () => {
  const { t } = useTranslation()
  const { data } = useQuery<getUserAccount>(GET_USER_ACCOUNT)

  return (
    <Text>{`${t('pages:home.welcome')} ${
      data?.getUserAccount?.firstname
    }`}</Text>
  )
}

export default WelcomeMessage
