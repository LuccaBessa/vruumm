import { useNavigation } from '@react-navigation/native'
import { Button, Input } from '@ui-kitten/components'
import React, { useCallback, useRef, useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import Snackbar from 'react-native-snackbar'
import { PasswordInput } from '../../../../components'
import { UserService } from '../../../../services/user.service'
import { SignupHeader } from '../../components'
import { styles } from './styles'

export const Signup = () => {
  const navigation = useNavigation()
  const [name, setName] = useState<string>('')
  const [nameCaption, setNameCaption] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailCaption, setEmailCaption] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCaption, setPasswordCaption] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [passwordConfirmationCaption, setPasswordConfirmationCaption] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
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

    const resp = await UserService.signUp(name, email, password)

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
    <KeyboardAvoidingView style={styles.container}>
      <SignupHeader />
      <ScrollView scrollEnabled style={styles.layout} contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          source={require('../../../../assets/Car.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
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
          <PasswordInput
            ref={passwordInput}
            caption={passwordCaption}
            isConfirmation={false}
            setValue={setPassword}
            value={password}
            onSubmitEditing={() => focusOnNext(confirmationInput)} returnKeyGo={false} isNew={false}
          />
          <PasswordInput
            ref={confirmationInput}
            caption={passwordConfirmationCaption}
            isConfirmation={true}
            setValue={setPasswordConfirmation}
            value={passwordConfirmation}
            onSubmitEditing={onClickSignUp}
            returnKeyGo={true} isNew={false}
          />
          <Button
            style={styles.loginButton}
            appearance="outline"
            status="control"
            size="large"
            onPress={onClickSignUp}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={{ width: '100%', textAlign: 'center' }} >Cadastrar</Text>
            )}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
