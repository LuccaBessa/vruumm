import { useNavigation } from '@react-navigation/native'
import { Button, Divider, Layout, RangeCalendar, Spinner, Text, TopNavigation } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import Snackbar from 'react-native-snackbar'
import { rentCar } from '../../api/rentCar'
import { useTokenContext } from '../../context/token'
import { styles } from './styles'
import { CalendarRange, Props } from './types'

export function RequestRent({ route }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [range, setRange] = useState<CalendarRange<Date>>()
  const [total, setTotal] = useState<string>()
  const navigation = useNavigation()
  const { tokenState } = useTokenContext()

  useEffect(() => {
    setTotal(totalPrice())
  }, [range])

  const onConfirm = async () => {
    let resp

    if (!range?.endDate) setRange({ ...range, endDate: range?.startDate })

    if (range?.endDate && range?.startDate && tokenState?.token) {
      setLoading(true)
      resp = await rentCar(range.startDate.toISOString(), range.endDate.toISOString(), route.params.car.codigo, Number(tokenState?.token))
      setLoading(false)
    }

    if (resp?.sucesso) {
      Snackbar.show({ text: 'Aluguel Solicitado' })
      navigation.goBack()
    } else {
      Snackbar.show({ text: resp.mensagem })
    }
  }

  const totalPrice = () => {
    if (range?.endDate && range?.startDate) {
      return 'Total: R$' + (route.params.car.precoDaDiaria * ((range.endDate.getTime() - range.startDate?.getTime()) / (1000 * 3600 * 24) + 1)).toFixed(2)
    } else {
      return 'Total: R$' + route.params.car.precoDaDiaria.toFixed(2)
    }
  }

  return (
    <Layout style={styles.container}>
      <TopNavigation
        title={() => <Text adjustsFontSizeToFit={true} style={styles.title}>Confirmar solicitação de aluguel</Text>}
      />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Modelo: {route.params.car?.modelo}</Text>
          <Text style={styles.infoText}>Marca: {route.params.car?.marca}</Text>
          <Text style={styles.infoText}>Placa: {route.params.car?.placa}</Text>
        </View>
        <Divider />
        <View>
          <Text style={styles.subtitle} category='h4'>Período de aluguel</Text>
          <RangeCalendar style={styles.calendar} range={range} onSelect={nextRange => setRange(nextRange)} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.total} category='h5'>{total}</Text>
          {loading ? <Spinner size='large' /> :
            <View style={styles.footerButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => { setRange({}); navigation.goBack() }}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <Button style={styles.confirmButton} onPress={onConfirm}>Confirmar</Button>
            </View>
          }
        </View>
      </ScrollView>
    </Layout>
  )
}
