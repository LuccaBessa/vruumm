import React from 'react'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { Props } from './types'
import { Text } from 'react-native'
import { styles } from './styles';

export function EditProfileHeader({ cancelFunction, confirmFunction }: Props) {
  const confirmIcon = (props: any) => (
    <Icon {...props} name='checkmark-outline' />
  );

  const closeIcon = (props: any) => (
    <Icon {...props} name='close-outline' />
  );

  const cancelAction = () => (
    <TopNavigationAction icon={closeIcon} onPress={() => cancelFunction()} />
  );

  const confirmAction = () => (
    <TopNavigationAction icon={confirmIcon} onPress={() => confirmFunction()} />
  );
  return (
    <TopNavigation
      title={() => <Text style={styles.usernameText}>Editar Perfil</Text>}
      alignment='center'
      accessoryLeft={cancelAction}
      accessoryRight={confirmAction}
    />
  )
}