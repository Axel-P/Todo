import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { WithTranslation } from 'react-i18next'

export type RootStackParamList = {
  Home: undefined
  Login: undefined
}
export type ScreenNavigationProp = NativeStackScreenProps<RootStackParamList>

export interface IPageProps extends ScreenNavigationProp, WithTranslation {}
