import { useNavigation } from '@react-navigation/native';
import { Button, Input, Layout } from '@ui-kitten/components';
import React, { useCallback, useRef, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { PasswordInput } from '../../../../components';
import { useAuth } from '../../../../hooks';
import { UserService } from '../../../../services/user.service';
import { styles } from './styles';

export const Login = () => {
  const navigation = useNavigation();
  const { setToken } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [emailCaption, setEmailCaption] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCaption, setPasswordCaption] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const passwordInput = useRef<Input>(null);

  const focusOnNext = useCallback(() => {
    passwordInput.current?.focus();
  }, []);

  const onClickLogin = async () => {
    let flag: boolean = false;

    if (email === '') {
      setEmailCaption('Campo Obrigatório');
      flag = true;
    } else {
      setEmailCaption('');
    }

    if (password === '') {
      setPasswordCaption('Campo Obrigatório');
      flag = true;
    } else {
      setPasswordCaption('');
    }

    if (flag) {
      return;
    }

    setIsLoading(true);

    const resp = await UserService.login(email, password);

    setIsLoading(false);

    if (resp.sucesso) {
      setToken(String(resp.corpo.codigo));
    } else {
      Snackbar.show({
        text: resp.mensagem,
      });
    }
  }

  return (
    <Layout style={styles.container}>
      <Image
        source={require('../../../../assets/Car.png')}
        resizeMode={'contain'}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          placeholder={'Digite seu e-mail'}
          value={email}
          keyboardType="email-address"
          autoCompleteType="email"
          autoCapitalize="none"
          caption={() => <Text style={{ color: 'white' }}>{emailCaption}</Text>}
          size="large"
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => focusOnNext()}
        />
        <PasswordInput
          ref={passwordInput}
          caption={passwordCaption}
          setValue={setPassword}
          value={password}
          isConfirmation={false}
          onSubmitEditing={onClickLogin}
          returnKeyGo={true}
          isNew={false}
        />
        <Button
          style={styles.loginButton}
          appearance="outline"
          status="control"
          size="large"
          onPress={onClickLogin}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={{ width: '100%', textAlign: 'center' }} >ENTRAR</Text>
          )}
        </Button>
      </View>
      <View style={styles.registerContainer}>
        <Button
          appearance="ghost"
          status="control"
          onPress={() => navigation.navigate('SignUp')}>
          Cadastre-se
        </Button>
      </View>
    </Layout>
  );
};
