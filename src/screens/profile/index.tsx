import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { ProfileHeader } from '../../components/ProfileHeader'
import { useTokenContext } from '../../context/token'
import { Laoder } from '../../components/Loader'
import { getProfile } from '../../api/getProfile'
import { useNavigation } from '@react-navigation/native'
import { getRentsSummary } from '../../api/getRentsSummary'

export function Profile() {
  const { tokenState } = useTokenContext()
  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>();
  const [rentsPending, setRentsPending] = useState<number>();
  const [rentsInProgress, setRentsInProgress] = useState<number>();
  const [rentsDone, setRentsDone] = useState<number>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => loadProfile())
  }, [])

  const loadProfile = async () => {
    let resp, resp1

    setLoading(true)
    if (tokenState?.token) {
      resp = await getProfile(tokenState?.token)
      resp1 = await getRentsSummary(tokenState?.token)
    }
    setProfile(resp.corpo)
    setRentsPending(resp1.corpo.quantidadeDeAlugueisPendentes)
    setRentsInProgress(resp1.corpo.quantidadeDeAlugueisEmAndamento)
    setRentsDone(resp1.corpo.quantidadeDeAlugueisFinalizados)
    setLoading(false)
  }

  const editProfile = () => {
    navigation.navigate('EditProfile', { profile: profile })
  }

  return (
    <Layout style={styles.layout}>
      {loading ? <Laoder /> :
        <>
          <ProfileHeader username={profile?.nome} />
          <View style={styles.container}>
            <View style={styles.mainInfo}>
              <Image style={styles.avatar} borderRadius={100} resizeMode='contain' source={require('../../assets/profile.png')} />
              <View style={styles.rentInfo}>
                <View>
                  <Text style={styles.rentNumberText} >{rentsPending}</Text>
                  <Text style={styles.rentText}>Pendentes</Text>
                </View>
                <View>
                  <Text style={styles.rentNumberText}>{rentsInProgress}</Text>
                  <Text style={styles.rentText}>Em Andamento</Text>
                </View>
                <View>
                  <Text style={styles.rentNumberText}>{rentsDone}</Text>
                  <Text style={styles.rentText}>Concluídos</Text>
                </View>
              </View>
            </View>
            <Text style={styles.emailText}>Email: {profile?.email ? profile?.email : 'Não Cadastrado'}</Text>
            <TouchableOpacity style={styles.edit} onPress={editProfile}>
              <Text style={styles.editText}>Editar Perfil</Text>
            </TouchableOpacity>
            <View style={styles.personalInfo}>
              <Text style={styles.infoTitle}>Informações Pessoais</Text>
              <Text style={styles.personalInfoText}>CPF: {profile?.cpf ? profile?.cpf : 'Não Cadastrado'}</Text>
              <Text style={styles.personalInfoText}>Telefone: {profile?.numeroTelefone ? profile?.numeroTelefone : 'Não Cadastrado'}</Text>
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.infoTitle}>Endereço</Text>
              <View style={styles.addressGrid}>
                <Text style={styles.addressInfoText}>CEP: {profile?.endereco?.cep ? profile?.endereco?.cep : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>Logradouro: {profile?.endereco?.logradouro ? profile?.endereco?.logradouro : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>Número: {profile?.endereco?.numero ? profile?.endereco?.numero : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>Complemento: {profile?.endereco?.complemento ? profile?.endereco?.complemento : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>Bairro: {profile?.endereco?.bairro ? profile?.endereco?.bairro : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>Cidade: {profile?.endereco?.uf ? profile?.endereco?.uf : 'Não Cadastrado'}</Text>
                <Text style={styles.addressInfoText}>UF: {profile?.endereco?.uf ? profile?.endereco?.uf : 'Não Cadastrado'}</Text>
              </View>
            </View>
          </View>
        </>
      }
    </Layout >
  )
}
