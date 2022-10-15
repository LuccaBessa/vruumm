import { useNavigation } from '@react-navigation/native'
import { Button, Divider, Icon, Modal, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { Car } from '../../../../types'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { styles } from './styles'

interface ICarDetailModalProps {
  visible: boolean
  setVisible: Function
  car?: Car
}

export const CarDetailModal = ({ visible, setVisible, car }: ICarDetailModalProps) => {
  const navigation = useNavigation()

  const imageSource = () => {
    if (car?.imagem) {
      return {
        uri: car?.imagem
      }
    }

    return require('../../../../assets/default-car.png')
  }

  const rent = () => {
    setVisible(false);
    navigation.navigate('RequestRent', { car: car })
  }

  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
          <Icon
            style={styles.closeIcon}
            fill='#c8004c'
            name='close-circle-outline'
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={imageSource()}
          resizeMode='cover'
          borderRadius={20}
          accessibilityLabel={'Imagem do carro'}
        />
        <Text style={styles.title} category='h4'>{car?.modelo}</Text>
        <Text style={styles.title} category='h6'>{formatCurrency(car?.precoDaDiaria || 0, 'R$')}/dia</Text>
        <Divider style={styles.divider} />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer} >
          <Text style={styles.info}>Marca: {car?.marca!}</Text>
          <Text style={styles.info}>Placa: {car?.placa!}</Text>
          <Text style={styles.info}>Ano: {car?.ano ? car?.ano : 'Não cadastrado'}</Text>
          <Text style={styles.info}>Assentos: {car?.numeroDeAssentos!}</Text>
          <Text style={styles.info}>Cor: {car?.cor ? car?.cor : 'Não cadastrado'}</Text>
          <View style={styles.description}>
            <Text style={{ marginBottom: 5 }}>Descrição:</Text>
            <Text>{!car?.descricao ? 'Sem descriçao' : car?.descricao}</Text>
          </View>
        </ScrollView>
        <Button style={styles.rentButton} onPress={rent}>
          Alugar
        </Button>
      </View>
    </Modal>
  )
}
