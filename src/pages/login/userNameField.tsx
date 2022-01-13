import React, { FunctionComponent } from 'react'
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import userNameVar from '../../api/localFields/user/userName'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useReactiveVar } from '@apollo/client'

const UserNameField: FunctionComponent<WithTranslation> = ({ t }) => {
  let userName = useReactiveVar(userNameVar)

  return (
    <TextInput
      placeholder={t('inputs.username')}
      placeholderTextColor={'black'}
      value={userName}
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        userNameVar(e.nativeEvent.text)
      }}
    />
  )
}

export default withTranslation()(UserNameField)
