import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core'
import { login } from '../../api/login'
import Snackbar from 'react-native-snackbar'
import { Text } from 'react-native'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [emailCaption, setEmailCaption] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCaption, setPasswordCaption] = useState<string>('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const navigation = useNavigation()

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const AlertIcon = (props: any) => (
    <Icon {...props} name='alert-circle-outline' />
  );

  const onClickLogin = async () => {
    let flag: boolean = false

    if (email == "") {
      setEmailCaption("Campo Obrigatório")
      flag = true
    }

    if (password == "") {
      setPasswordCaption("Campo Obrigatório")
      flag = true
    }

    if (flag) {
      return
    }

    let resp = await login(email, password)

    if (resp.sucesso) {
      console.log('sucesso')
    } else {
      console.log(resp.mensagem)
      Snackbar.show({
        text: resp.mensagem
      })
    }
  }

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
        </View>
        <KeyboardAvoidingView style={styles.formContainer}>
          <Input
            style={styles.input}
            placeholder={'Digite seu e-mail'}
            value={email}
            caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
            size='large'
            onChangeText={text => setEmail(text)}
          />
          <Input
            style={styles.input} placeholder={'Digite sua senha'}
            value={password}
            caption={() => <Text style={{ color: 'white' }}>{passwordCaption}</Text>}
            size='large' onChangeText={text => setPassword(text)}
            accessoryRight={renderIcon} secureTextEntry={secureTextEntry}
          />
          <Button style={styles.loginButton} appearance='outline' status='control' size='large' onPress={onClickLogin}>ENTRAR</Button>
        </KeyboardAvoidingView>
        <View style={styles.registerContainer}>
          <Button appearance='ghost' status='control' onPress={() => navigation.navigate('SignUp')}>Cadastre-se</Button>
        </View>
      </ScrollView>
    </Layout>
  )
}
