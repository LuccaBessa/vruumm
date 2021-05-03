import React, { useCallback, useRef, useState } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { Button, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { signUp } from '../../api/signup'
import Snackbar from 'react-native-snackbar'
import { useNavigation } from '@react-navigation/native'
import { PasswordInput } from '../../components/PasswordInput'
import { SignupHeader } from '../../components/SignupHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
  const emailInput = useRef<Input>(null);
  const passwordInput = useRef<Input>(null);
  const confirmationInput = useRef<Input>(null);

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

  const focusOnNext = useCallback((input) => {
    input.current?.focus();
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.container} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.scrollContainer} scrollEnabled={false}>
      <SignupHeader />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          size='large'
          placeholder={'Digite seu nome*'}
          value={name} caption={() => <Text style={{ color: 'white' }}>{nameCaption}</Text>}
          onChangeText={text => setName(text)}
          onSubmitEditing={() => focusOnNext(emailInput)}
        />
        <Input
          ref={emailInput}
          style={styles.input}
          size='large'
          placeholder={'Digite seu e-mail*'}
          value={email}
          caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => focusOnNext(passwordInput)}
        />
        <PasswordInput ref={passwordInput} caption={passwordCaption} isConfirmation={false} setValue={setPassword} value={password} onSubmitEditing={() => focusOnNext(confirmationInput)} returnKeyGo={false} isNew={false} />
        <PasswordInput ref={confirmationInput} caption={passwordConfirmationCaption} isConfirmation={true} setValue={setPasswordConfirmation} value={passwordConfirmation} onSubmitEditing={onClickSignUp} returnKeyGo={true} isNew={false} />
        {isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : <Button style={styles.signUpButton} appearance='outline' status='control' onPress={onClickSignUp}>Cadastrar</Button>}
      </View>
    </KeyboardAwareScrollView>
  )
}
