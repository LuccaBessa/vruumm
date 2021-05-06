import React from 'react'
import { Text } from '@ui-kitten/components'
import { styles } from './styles';
import { Props } from './types';
import { View } from 'react-native';
import { phoneMask } from '../../utils/masks'

export function RentCard({ model, startDate, endDate, owner, phone, totalPrice, status }: Props) {
  const style = styles(status.toLowerCase());

  const formatDate = (date: Date): string => {
    return date.toJSON().slice(0, 10).split('-').reverse().join('/')
  }

  const formatStatus = (status: string): string => {
    if (status == 'em_andamento') {
      return 'EM ANDAMENTO'
    } else {
      return status.toUpperCase()
    }
  }

  return (
    <View style={style.card}>
      <Text style={style.title} category='h5' numberOfLines={1}>{model}</Text>
      <Text style={style.text}>{`Período: ${formatDate(startDate)} à ${formatDate(endDate)}`}</Text>
      <Text style={style.text}>Dono(a): {owner}</Text>
      <Text style={style.text}>Telefone de Contato: {phoneMask(phone)}</Text>
      <Text style={style.text}>Preço Total: R${totalPrice.toFixed(2)}</Text>
      <View style={style.flag}>
        <Text style={style.flagText}>{formatStatus(status.toLowerCase())}</Text>
      </View>
    </View>
  )
}