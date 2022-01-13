import React, { FunctionComponent } from 'react'
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
import passwordVar from '../../api/localFields/user/password'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useReactiveVar } from '@apollo/client'

const PasswordField: FunctionComponent<WithTranslation> = ({ t }) => {
  const password = useReactiveVar(passwordVar)

  return (
    <TextInput
      placeholder={t('inputs.password')}
      placeholderTextColor={'black'}
      value={password}
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        passwordVar(e.nativeEvent.text)
      }}
    />
  )
}

export default withTranslation()(PasswordField)
