import { useNavigation } from '@react-navigation/native';
import { Button, CalendarRange, Layout, RangeCalendar, Spinner, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import Snackbar from 'react-native-snackbar';
import { useAuth } from '../../../../hooks';
import { RentalService } from '../../../../services';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { styles } from './styles';

interface IRequestRentProps {
  route: any
}

export const RequestRent = ({ route }: IRequestRentProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [range, setRange] = useState<CalendarRange<Date>>();
  const [total, setTotal] = useState<string>('');
  const navigation = useNavigation()
  const { token } = useAuth()

  useEffect(() => {
    setTotal(totalPrice())
  }, [range])

  const onCancel = () => {
    setRange({});
    navigation.goBack()
  }

  const onConfirm = async () => {
    if (range?.endDate && range?.startDate && token) {
      setLoading(true)
      await RentalService.rentCar(
        range.startDate.toISOString(),
        range.endDate.toISOString(),
        route.params.car.codigo,
        Number(token)
      )
      setLoading(false)
      navigation.goBack()
    }
  }

  const totalPrice = () => {
    if (range?.endDate && range?.startDate) {
      return 'Total: ' + formatCurrency((route.params.car.precoDaDiaria * ((range.endDate.getTime() - range.startDate?.getTime()) / (1000 * 3600 * 24) + 1)), 'R$')
    } else {
      return 'Total: ' + formatCurrency(0, 'R$')
    }
  }

  return (
    <Layout style={styles.container}>
      <ScrollView>
        <Text style={styles.title} category='h1'>Período de aluguel</Text>
        <RangeCalendar style={styles.calendar} range={range} onSelect={nextRange => setRange(nextRange)} />
      </ScrollView>
      <View>
        <Text style={styles.total} category='h5'>{total}</Text>
        <View style={styles.footerButtons}>
          {loading ? <Spinner size='small' /> :
            <>
              <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <Button style={styles.confirmButton} onPress={onConfirm}>Confirmar</Button>
            </>
          }
        </View>
      </View>
    </Layout >
  )
}
