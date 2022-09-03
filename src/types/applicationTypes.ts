import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { WithTranslation } from 'react-i18next'

export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Callback: undefined
}
export type ScreenNavigationProp = NativeStackScreenProps<RootStackParamList>

export interface IPageProps extends ScreenNavigationProp, WithTranslation {}

export interface IGenericType {
  <T>(instance: T): <K extends keyof T>(
    firstLevelKey: K,
    secondLevelKey: keyof T[K],
  ) => T[K][keyof T[K]]
}

// const myObj = {
//   vegetabes: {
//     legumes: ['chickpea', 'garbanzo', 'lentil'],
//     tubers: ['potatoe', 'carrot'],
//   },
//   meat: {
//     farm: ['cow', 'goat', 'lamb'],
//     wild: ['deer', 'bear'],
//   },
// }

// function genericAccess<T, K extends keyof T>(
//   instance: T,
//   firstLevelKey: K,
//   secondLevelKey: keyof T[K],
// ) {
//   const item = instance[firstLevelKey][secondLevelKey]
// }

// function genericAccess2<T>(instance: T) {
//   //const item = instance[firstLevelKey][secondLevelKey];
//   return <K extends keyof T>(firstLevelKey: K, secondLevelKey: keyof T[K]) =>
//     instance[firstLevelKey][secondLevelKey]
// }

// const genericAccess3: IGenericType = <T>(instance: T) => {
//   return <K extends keyof T>(firstLevelKey: K, secondLevelKey: keyof T[K]) =>
//     instance[firstLevelKey][secondLevelKey]
// }

// const findRecipe = genericAccess(myObj, 'meat', 'farm')

// const findRecipe2 = genericAccess2(myObj)

// findRecipe2('meat', 'wild')

// const findRecipe3 = genericAccess3(myObj)
// findRecipe3('meat', 'farm')

// const findRecipe = <T extends keyof typeof myObj>(
//   firstLevelKey: T,
//   secondLevelKey: keyof typeof myObj[T]) => {
//    const collection = myObj[firstLevelKey][secondLevelKey]
// }

// findRecipe('meat', 'farm')

// const findRecipe = (firstLevelKey: keyof typeof myObj, secondLevelKey: keyof typeof myObj[keyof typeof myObj]) => {
//    const collection = myObj[firstLevelKey][secondLevelKey]
// }

// console.log(findRecipe('meat', 'farm'))
