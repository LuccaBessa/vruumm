import { Divider, Layout, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { Laoder } from '../../../../components'
import { useAuth } from '../../../../hooks'
import { RentalService } from '../../../../services'
import { RentCard } from '../../components'
import { styles } from './styles'

export const Rents = () => {
  const { token } = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  const [rents, setRents] = useState<any[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    loadRents()
  }, [])

  const loadRents = async () => {
    if (token) {
      const resp = await RentalService.getRents(token)
      setRents(resp)
    }
    setLoading(false)
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadRents()
    setRefreshing(false);
  }, [refreshing]);

  const Item = ({ item }: { item: any }) => (
    <RentCard
      startDate={new Date(item?.dataInicioReserva)}
      endDate={new Date(item?.dataFimReserva)}
      owner={item?.usuarioLocador.nome}
      phone={item?.usuarioLocador.numeroTelefone}
      totalPrice={item?.precoTotal}
      status={item?.situacao}
      model={item?.carroAlugado.modelo}
    />
  )

  const renderItem = ({ item }: { item: any }) => <Item item={item} />

  return (
    <Layout style={styles.container}>
      <Text style={styles.title} category='h1'>Aluguéis</Text>
      <Divider />
      {loading && !refreshing ? <Laoder /> :
        <FlatList
          data={rents}
          renderItem={renderItem}
          keyExtractor={(item) => item.codigo.toString()}
          ListEmptyComponent={<Layout />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#c8004c']}
            />
          }
        />
      }
    </Layout>
  )
}
