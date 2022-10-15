import React from 'react'
import { Spinner } from '@ui-kitten/components'
import { styles } from './styles';
import { View } from 'react-native';

export function Laoder() {
  return (
    <View style={styles.container} >
      <Spinner size='large' />
    </View>
  )
}