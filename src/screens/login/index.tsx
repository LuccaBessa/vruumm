import React, { useState } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import { Button, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core'
import { login } from '../../api/login'
import Snackbar from 'react-native-snackbar'
import { Text } from 'react-native'
import { PasswordInput } from '../../components/PasswordInput'
import { useTokenContext } from '../../Context/token'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [emailCaption, setEmailCaption] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCaption, setPasswordCaption] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigation = useNavigation()
  const { setToken } = useTokenContext()

  const onClickLogin = async () => {
    let flag: boolean = false

    if (email == "") {
      setEmailCaption("Campo Obrigatório")
      flag = true
    } else {
      setEmailCaption("")
    }

    if (password == "") {
      setPasswordCaption("Campo Obrigatório")
      flag = true
    } else {
      setPasswordCaption("")
    }

    if (flag) {
      return
    }

    setIsLoading(true)

    let resp = await login(email, password)

    setIsLoading(false)

    if (resp.sucesso) {
      setToken(String(resp.corpo.codigo))
    } else {
      Snackbar.show({
        text: resp.mensagem
      })
    }
  }

  return (
    <Layout style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          value={email}
          caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
          size='large'
          onChangeText={text => setEmail(text)}
        />
        <PasswordInput caption={passwordCaption} setValue={setPassword} value={password} isConfirmation={false} />
        {isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : <Button style={styles.loginButton} appearance='outline' status='control' size='large' onPress={onClickLogin}>ENTRAR</Button>}
      </View>
      <View style={styles.registerContainer}>
        <Button appearance='ghost' status='control' onPress={() => navigation.navigate('SignUp')}>Cadastre-se</Button>
      </View>
    </Layout>
  )
}
