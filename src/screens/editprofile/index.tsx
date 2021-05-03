import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { EditProfileHeader } from '../../components/EditProfileHeader'
import { useNavigation } from '@react-navigation/native'
import { Props } from './types'
import { Text } from 'react-native'
import { PasswordInput } from '../../components/PasswordInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { getAddress } from '../../api/getAddress'
import Snackbar from 'react-native-snackbar'
import { updateProfile } from '../../api/updateProfile'

export function EditProfile({ route }: Props) {
  const [profile, setProfile] = useState<any>()
  const [email, setEmail] = useState<string>()
  const [senha, setSenha] = useState<string>('')
  const [senhaConfirmacao, setSenhaConfirmacao] = useState<string>('')
  const [nome, setNome] = useState<string>()
  const [cpf, setCpf] = useState<string>()
  const [numeroTelefone, setNumeroTelefone] = useState<string>()
  const [cepEndereco, setCepEndereco] = useState<string>()
  const [logradouroEndereco, setLogradouroEndereco] = useState<string>()
  const [numeroEndereco, setNumeroEndereco] = useState<string>()
  const [complementoEndereco, setComplementoEndereco] = useState<string>()
  const [bairroEndereco, setBairroEndereco] = useState<string>()
  const [ufEndereco, setUfEndereco] = useState<string>();
  const scroll = useRef<KeyboardAwareScrollView>(null)
  const nameInput = useRef<Input>(null)
  const emailInput = useRef<Input>(null)
  const cpfInput = useRef<Input>(null)
  const phoneInput = useRef<Input>(null)
  const passwordInput = useRef<Input>(null)
  const confirmInput = useRef<Input>(null)
  const cepInput = useRef<Input>(null)
  const addressNumberInput = useRef<Input>(null)
  const addressComplementInput = useRef<Input>(null)
  const addressStreetInput = useRef<Input>(null)
  const addressNeighborhoodInput = useRef<Input>(null)
  const addressStateInput = useRef<Input>(null)
  const navigation = useNavigation()

  useEffect(() => {
    setProfile(route.params.profile)
    setEmail(route.params.profile.email)
    setNome(route.params.profile.nome)
    setCpf(route.params.profile.cpf)
    setNumeroTelefone(route.params.profile.numeroTelefone)
    setCepEndereco(route.params.profile.endereco.cep)
    setLogradouroEndereco(route.params.profile.endereco.logradouro)
    setNumeroEndereco(route.params.profile.endereco.numero)
    setComplementoEndereco(route.params.profile.endereco.complemento)
    setBairroEndereco(route.params.profile.endereco.bairro)
    setUfEndereco(route.params.profile.endereco.uf)
  }, [])

  const onCancel = () => {
    navigation.goBack()
  }

  const onConfirm = async () => {
    let body: object = {}

    if ((!nome || nome == "") || (!email || email == "") || (!cpf || cpf == "") || (!numeroTelefone || numeroTelefone == "") || (!cepEndereco || cepEndereco == "") || (!numeroEndereco || numeroEndereco == "") || (!logradouroEndereco || logradouroEndereco == "") || (!bairroEndereco || bairroEndereco == "") || (!ufEndereco || ufEndereco == "")) {
      Snackbar.show({
        text: 'Campos obrigatórios faltando'
      })
      return
    } if (senha && senha !== senhaConfirmacao) {
      Snackbar.show({
        text: 'Senhas incompatíveis'
      })
      return
    } else {
      if (profile.nome != nome) body = { ...body, "nome": nome }
      if (profile.email != email) body = { ...body, "email": email }
      if (profile.cpf != cpf) body = { ...body, "cpf": cpf }
      if (profile.numeroTelefone != numeroTelefone) body = { ...body, "numeroTelefone": numeroTelefone }
      if (senha) body = { ...body, "senha": senha }
      if (profile.endereco.cep != cepEndereco) body = { ...body, "cepEndereco": cepEndereco }
      if (profile.endereco.numero != numeroEndereco) body = { ...body, "numeroEndereco": numeroEndereco }
      if (profile.endereco.complemento != complementoEndereco) body = { ...body, "complementoEndereco": complementoEndereco }
      if (profile.endereco.logradouro != logradouroEndereco) body = { ...body, "logradouroEndereco": logradouroEndereco }
      if (profile.endereco.bairro != bairroEndereco) body = { ...body, "bairroEndereco": bairroEndereco }
      if (profile.endereco.uf != ufEndereco) body = { ...body, "ufEndereco": ufEndereco }

      let resp = await updateProfile(profile.codigo, body)

      Snackbar.show({
        text: resp.sucesso ? 'Perfil editado com sucesso' : resp.mensagem
      })

      if (resp.sucesso) {
        navigation.goBack()
      }
    }
  }

  const focusOnNext = useCallback((input) => {
    input.current?.focus();
  }, []);

  const focusOnCep = () => {
    focusOnNext(cepInput)
    scroll.current?.scrollToEnd(true);
  }

  const confirmCep = async () => {
    if (cepEndereco?.length == 8) {
      let resp = await getAddress(cepEndereco)
      if (resp.erro) {
        setLogradouroEndereco('')
        setBairroEndereco('')
        setUfEndereco('')
        Snackbar.show({
          text: 'CEP não encontrado'
        })
      } else {
        setLogradouroEndereco(resp.logradouro)
        setBairroEndereco(resp.bairro)
        setUfEndereco(resp.uf)
        focusOnNext(addressNumberInput)
      }
    } else {
      setLogradouroEndereco('')
      setBairroEndereco('')
      setUfEndereco('')
      Snackbar.show({
        text: 'CEP inválido'
      })
    }
  }

  return (
    <Layout style={styles.layout}>
      <EditProfileHeader cancelFunction={onCancel} confirmFunction={onConfirm} />
      <KeyboardAwareScrollView ref={scroll} style={styles.container} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.scrollContainer} scrollEnabled={true}>
        <Text style={styles.infoTitle}>Informações Pessoais</Text>
        <Input ref={nameInput} style={styles.input} placeholder={'Nome*'} size='large' value={nome} onChangeText={(text: string) => setNome(text)} onSubmitEditing={() => focusOnNext(emailInput)} />
        <Input ref={emailInput} style={styles.input} placeholder={'Email*'} size='large' value={email} onChangeText={(text: string) => setEmail(text)} onSubmitEditing={() => focusOnNext(cpfInput)} />
        <Input ref={cpfInput} style={styles.input} placeholder={'CPF*'} size='large' keyboardType='numeric' maxLength={11} value={cpf} onChangeText={(text: string) => setCpf(text)} onSubmitEditing={() => focusOnNext(phoneInput)} />
        <Input ref={phoneInput} style={styles.input} placeholder={'Telefone*'} size='large' keyboardType='phone-pad' maxLength={11} value={numeroTelefone} onChangeText={(text: string) => setNumeroTelefone(text)} onSubmitEditing={focusOnCep} />
        <PasswordInput ref={passwordInput} value={senha} setValue={setSenha} isConfirmation={false} caption={''} returnKeyGo={false} onSubmitEditing={() => focusOnNext(confirmInput)} isNew={true} />
        <PasswordInput ref={confirmInput} value={senhaConfirmacao} setValue={setSenhaConfirmacao} isConfirmation={true} caption={''} returnKeyGo={false} onSubmitEditing={() => null} isNew={true} />
        <Text style={styles.infoTitle}>Endereço</Text>
        <Input ref={cepInput} style={styles.input} placeholder={'CEP*'} size='large' keyboardType='numeric' maxLength={8} value={cepEndereco} onChangeText={(text: string) => setCepEndereco(text)} onSubmitEditing={confirmCep} returnKeyType='search' />
        <Input ref={addressNumberInput} style={styles.input} placeholder={'Número*'} size='large' keyboardType='numeric' value={numeroEndereco} onChangeText={(text: string) => setNumeroEndereco(text)} onSubmitEditing={() => focusOnNext(addressComplementInput)} />
        <Input ref={addressComplementInput} style={styles.input} placeholder={'Complemento'} size='large' value={complementoEndereco} onChangeText={(text: string) => setComplementoEndereco(text)} onSubmitEditing={() => focusOnNext(nameInput)} />
        <Input ref={addressStreetInput} style={styles.input} placeholder={'Logradouro*'} size='large' disabled={true} value={logradouroEndereco} />
        <Input ref={addressNeighborhoodInput} style={styles.input} placeholder={'Bairro*'} size='large' disabled={true} value={bairroEndereco} />
        <Input ref={addressStateInput} style={styles.input} placeholder={'UF*'} size='large' disabled={true} value={ufEndereco} />
      </KeyboardAwareScrollView>
    </Layout >
  )
}
