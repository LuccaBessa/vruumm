import React from 'react'
import { Icon, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles'
import { Text } from 'react-native'
import { useAuth } from '../../../../hooks'

interface IProfileHeaderProps {
  username: string
}

export function ProfileHeader({ username }: IProfileHeaderProps) {
  const { setToken } = useAuth()
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const MenuIcon = (props: any) => (
    <Icon {...props} name='more-vertical' />
  );

  const LogoutIcon = (props: any) => (
    <Icon {...props} name='log-out' />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={LogoutIcon} title='Logout' onPress={logOut} />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const logOut = () => {
    AsyncStorage.removeItem("token")
    setToken("")
  }

  return (
    <TopNavigation
      title={() => <Text style={styles.usernameText}>{username}</Text>}
      accessoryRight={renderRightActions}
    />
  )
}