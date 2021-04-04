import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { signUp } from '../../api/signup'
import Snackbar from 'react-native-snackbar'

export function SignUp() {
  const [name, setName] = useState<string>('')
  const [nameCaption, setNameCaption] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailCaption, setEmailCaption] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordCaption, setPasswordCaption] = useState<string>('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [passwordConfirmationCaption, setPasswordConfirmationCaption] = useState<string>('')
  const [secureTextEntry1, setSecureTextEntry1] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const toggleSecureEntry1 = () => {
    setSecureTextEntry1(!secureTextEntry1);
  };

  const renderIcon1 = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry1}>
      <Icon {...props} name={secureTextEntry1 ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const onClickSignUp = async () => {
    let flag: boolean = false

    if (name == "") {
      setNameCaption("Campo Obrigatório")
      flag = true
    }

    if (email == "") {
      setEmailCaption("Campo Obrigatório")
      flag = true
    }

    if (password == "") {
      setPasswordCaption("Campo Obrigatório")
      flag = true
    }

    if (passwordConfirmation == "") {
      setPasswordConfirmationCaption("Campo Obrigatório")
      flag = true
    }

    if (flag) {
      return
    }

    let resp = await signUp(name, email, password)
    if (resp.sucesso) {
      console.log('sucesso')
    } else {
      Snackbar.show({
        text: resp.mensagem
      })
    }
  }

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
        </View>
        <KeyboardAvoidingView style={styles.formContainer}>
          <Input
            style={styles.input}
            placeholder={'Digite seu nome'}
            value={name} caption={() => <Text style={{ color: 'white' }}>{nameCaption}</Text>}
            onChangeText={text => setName(text)}
          />
          <Input
            style={styles.input}
            placeholder={'Digite seu e-mail'}
            value={email}
            caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
            onChangeText={text => setEmail(text)}
          />
          <Input
            style={styles.input}
            placeholder={'Digite sua senha'}
            value={password} caption={() => <Text style={{ color: 'white' }}>{passwordCaption}</Text>}
            onChangeText={text => setPassword(text)}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
          />
          <Input
            style={styles.input}
            placeholder={'Confirme sua senha'}
            value={passwordConfirmation}
            caption={() => <Text style={{ color: 'white' }}>{passwordConfirmationCaption}</Text>}
            onChangeText={text => setPasswordConfirmation(text)}
            accessoryRight={renderIcon1} secureTextEntry={secureTextEntry}
          />
          <Button style={styles.signUpButton} appearance='outline' status='control' onPress={onClickSignUp}>Cadastrar</Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  )
}
