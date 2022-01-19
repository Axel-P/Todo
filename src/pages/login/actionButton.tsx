import React, { FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import { useQuery } from '@apollo/client'
import GET_USER_ACCOUNT from '../../api/queries/getUserAccount'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../types/applicationTypes'
import { getUserAccount } from '../../types/graphql/getUserAccount'

const ActionButton: FunctionComponent = () => {
  const [skip, setSkip] = useState(true)
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { t } = useTranslation()
  const { loading } = useQuery<getUserAccount>(GET_USER_ACCOUNT, {
    skip,
    onCompleted: ({ getUserAccount: data }) => {
      console.log('onCompleted')
      if (data) {
        navigate('Home')
        setSkip(true) //This is a patch :(. Ideally we should be using useLazyQuery. But `onCompleted` seems to not work as expected when re-fetching
      }
    },
  })

  return (
    <Button
      onPress={() => {
        setSkip(false)
      }}
      title={t('actions.login')}
      disabled={loading}
    />
  )
}

export default ActionButton
