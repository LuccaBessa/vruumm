import React from 'react'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'
import { styles } from './styles';

interface IBottomTapNavigatorProps {
  state: any
  navigation: any
}

export function BottomTapNavigator({ state, navigation }: IBottomTapNavigatorProps) {
  const homeIcon = (props: any) => (
    <Icon {...props} name='home-outline' />
  );

  const cartIcon = (props: any) => (
    <Icon {...props} name='shopping-cart-outline' />
  );

  const personIcon = (props: any) => (
    <Icon {...props} name='person-outline' />
  );

  return (
    <BottomNavigation style={styles.bottomNavigation} selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={homeIcon} />
      <BottomNavigationTab icon={cartIcon} />
      <BottomNavigationTab icon={personIcon} />
    </BottomNavigation>
  )
}