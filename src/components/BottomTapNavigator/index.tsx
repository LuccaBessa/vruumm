import React from 'react'
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components'
import { styles } from './styles';
import { Props } from './types';

export function BottomTapNavigator({ state, navigation }: Props) {
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