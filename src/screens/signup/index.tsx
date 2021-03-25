import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export function SignUp() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scroll}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
        </View>
        <KeyboardAvoidingView style={styles.formContainer}>
          <Input style={styles.input} placeholder={'Digite seu nome'} value={name} onChangeText={text => setName(text)} />
          <Input style={styles.input} placeholder={'Digite seu e-mail'} value={email} onChangeText={text => setEmail(text)} />
          <Input style={styles.input} placeholder={'Digite sua senha'} value={password} onChangeText={text => setPassword(text)} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} />
          <Input style={styles.input} placeholder={'Confirme sua senha'} value={passwordConfirmation} onChangeText={text => setPasswordConfirmation(text)} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} />
          <Button style={styles.signUpButton} appearance='outline' status='alternate' onPress={() => null}>Cadastrar</Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Layout>
  )
}
