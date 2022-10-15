import React from 'react'
import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import { Text } from 'react-native'
import { styles } from './styles';

interface IEditProfileHeaderProps {
  cancelFunction: Function
  confirmFunction: Function
}

export function EditProfileHeader({ cancelFunction, confirmFunction }: IEditProfileHeaderProps) {
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