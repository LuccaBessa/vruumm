import { useNavigation } from '@react-navigation/native'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'
import { styles } from './styles'

export function SignupHeader() {
  const navigation = useNavigation()

  const BackIcon = (props: any) => (
    <Icon {...props} name='arrow-back-outline' fill='#FFFFFF' />
  )

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  )

  return (
    <TopNavigation style={styles.topNavigation} accessoryLeft={BackAction} />
  )
}
