import React, { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { Laoder } from '../../components/Loader';
import { useTokenContext } from '../../context/token';
import { getRents } from '../../api/getRents';
import { RefreshControl, ScrollView, Text } from 'react-native';
import { RentCard } from '../../components/RentCard';

export function Rents() {
  const { tokenState } = useTokenContext()
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [rents, setRents] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true)
    loadRents()
  }, [])

  const loadRents = async () => {
    let resp

    if (tokenState?.token) {
      resp = await getRents(tokenState?.token)
      setRents(resp.corpo)
    }

    setLoading(false)
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadRents()
    setRefreshing(false);
  }, [refreshing]);

  return (
    <Layout style={styles.container}>
      {loading ? <Laoder /> :
        rents.length > 0 ?
          <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer} refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#c8004c']} />
          }>
            {rents.map(rent => <RentCard key={rent?.codigo} model={rent?.carroAlugado.modelo} startDate={new Date(rent?.dataInicioReserva)} endDate={new Date(rent?.dataFimReserva)} owner={rent?.usuarioLocador.nome} phone={rent?.usuarioLocador.numeroTelefone} totalPrice={rent?.precoTotal} status={rent?.situacao} />)}
          </ScrollView>
          : <Text>Nenhum aluguel encontrado</Text>
      }
    </Layout>
  )
}
