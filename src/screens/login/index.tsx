import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
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

  return (
    <Layout style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Car.png')} resizeMode={'contain'} style={styles.logo} />
      </View>
      <KeyboardAvoidingView style={styles.formContainer}>
        <Input style={styles.input} placeholder={'Digite seu e-mail'} value={email} size='large' onChangeText={text => setEmail(text)} />
        <Input style={styles.input} placeholder={'Digite sua senha'} value={password} size='large' onChangeText={text => setPassword(text)} accessoryRight={renderIcon} secureTextEntry={secureTextEntry} />
        <Button style={styles.loginButton} appearance='outline' status='alternate' size='large' onPress={() => null}>ENTRAR</Button>
      </KeyboardAvoidingView>
      <View style={styles.registerContainer}>
        <Button appearance='ghost' status='alternate' onPress={() => navigation.navigate('SignUp')}>Cadastre-se</Button>
      </View>
    </Layout>
  )
}
