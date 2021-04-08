import React from 'react'
import { Button, Text } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTokenContext } from '../../Context/token';

export function Main() {
  const { setToken } = useTokenContext()

  return (
    <Layout style={styles.container}>
      <Text>Main</Text>
      <Button title='Sign Out' onPress={() => {
        AsyncStorage.removeItem("token")
        setToken("")
      }} />
    </Layout>
  )
}
