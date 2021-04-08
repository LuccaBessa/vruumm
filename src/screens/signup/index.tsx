import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { Button, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { signUp } from '../../api/signup'
import Snackbar from 'react-native-snackbar'
import { useNavigation } from '@react-navigation/native'
import { PasswordInput } from '../../components/PasswordInput'
import { SignupHeader } from '../../components/SignupHeader'

export function SignUp() {
  const [name, setName] = useState<string>('')
  const [nameCaption, setNameCaption] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailCaption, setEmailCaption] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCaption, setPasswordCaption] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [passwordConfirmationCaption, setPasswordConfirmationCaption] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigation = useNavigation()

  const onClickSignUp = async () => {
    let flag: boolean = false

    if (name == "") {
      setNameCaption("Campo Obrigatório")
      flag = true
    } else {
      setNameCaption("")
    }

    if (email == "") {
      setEmailCaption("Campo Obrigatório")
      flag = true
    } else {
      setEmailCaption("")
    }

    if (password == "") {
      setPasswordCaption("Campo Obrigatório")
      flag = true
    } else if (password.length < 6) {
      setPasswordCaption("Senha deve possuir no mínimo 6 caracteres")
      flag = true
    } else {
      setPasswordCaption("")
    }

    if (passwordConfirmation == "") {
      setPasswordConfirmationCaption("Campo Obrigatório")
      flag = true
    } else if (passwordConfirmation != password) {
      setPasswordConfirmationCaption("Senhas incompatíveis")
      flag = true
    } else {
      setPasswordConfirmationCaption("")
    }

    if (flag) {
      return
    }

    setIsLoading(true)

    let resp = await signUp(name, email, password)

    setIsLoading(false)

    Snackbar.show({
      text: resp.mensagem == null && resp.sucesso ? 'Cadastro realizado com sucesso' : resp.mensagem
    })

    if (resp.sucesso) {
      navigation.goBack()
    }
  }

  return (
    <Layout style={styles.container}>
      <SignupHeader />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
        </View>
        <KeyboardAvoidingView style={styles.formContainer}>
          <Input
            style={styles.input}
            placeholder={'Digite seu nome'}
            value={name} caption={() => <Text style={{ color: 'white' }}>{nameCaption}</Text>}
            onChangeText={text => setName(text)}
            size='large'
          />
          <Input
            style={styles.input}
            placeholder={'Digite seu e-mail'}
            value={email}
            caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
            onChangeText={text => setEmail(text)}
            size='large'
          />
          <PasswordInput key='pass' caption={passwordCaption} isConfirmation={false} setValue={setPassword} value={password} />
          <PasswordInput key='passconf' caption={passwordConfirmationCaption} isConfirmation={true} setValue={setPasswordConfirmation} value={passwordConfirmation} />
          {isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : <Button style={styles.signUpButton} appearance='outline' status='control' onPress={onClickSignUp}>Cadastrar</Button>}
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  )
}
