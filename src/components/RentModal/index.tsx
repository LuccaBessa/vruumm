import { Button, Modal, RangeCalendar, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useTokenContext } from '../../context/token'
import { styles } from './styles'
import { CalendarRange, Props } from './types'

export function RentModal({ visible, setVisible, closeModal, id, price }: Props) {
  const [range, setRange] = useState<CalendarRange<Date>>()
  const [total, setTotal] = useState<string>()
  const { tokenState } = useTokenContext()

  useEffect(() => {
    setTotal(totalPrice())
  }, [range])

  const onConfirm = () => {
    console.log('id :>> ', id);
    console.log('tokenState :>> ', tokenState?.token);
    setVisible(false)
    closeModal(false)
  }

  const totalPrice = () => {
    if (range?.endDate && range?.startDate) {
      return 'Total: R$' + (price * (range.endDate.getTime() - range.startDate?.getTime()) / (1000 * 3600 * 24)).toFixed(2)
    } else {
      return 'Total: R$' + price.toFixed(2)
    }
  }

  return (
    <Modal visible={visible} backdropStyle={styles.backdrop}>
      <View style={styles.container}>
        <Text style={styles.title} category='h4'>Confirmar solicitação de aluguel</Text>
        <RangeCalendar range={range} onSelect={nextRange => setRange(nextRange)} />
        <Text style={styles.total} category='h5'>{total}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => { setRange({}); setVisible(false) }}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <Button style={styles.confirmButton} onPress={onConfirm}>Confirmar</Button>
        </View>
      </View>
    </Modal>
  )
}
