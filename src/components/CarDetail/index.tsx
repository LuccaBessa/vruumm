import { useNavigation } from '@react-navigation/native'
import { Button, Divider, Icon, Modal, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Props } from './types'

export function CarDetail({ visible, setVisible, car }: Props) {
  const navigation = useNavigation()

  const imageSource = () => {
    if (car?.imagem) {
      return {
        uri: car?.imagem
      }
    }

    return require('../../assets/default-car.png')
  }

  return (
    <Modal visible={visible} backdropStyle={styles.backdrop} onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={() => setVisible(false)}>
          <Icon
            style={styles.closeIcon}
            fill='#c8004c'
            name='close-circle-outline'
          />
        </TouchableOpacity>
        <Image style={styles.image} source={imageSource()} resizeMode='cover' borderRadius={20} accessibilityLabel={'Imagem do carro'} />
        <Text style={styles.title} category='h2'>{car?.modelo}</Text>
        <Text style={styles.title} category='h6'>R${car?.precoDaDiaria.toFixed(2)}/dia</Text>
        <Divider style={styles.divider} />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer} >
          <View style={styles.row}>
            <Text>Marca: {car?.marca}</Text>
            <Text>Placa: {car?.placa}</Text>
          </View>
          <View style={styles.row}>
            <Text>Ano: {car?.ano ? car?.ano : 'Não cadastrado'}</Text>
            <Text>Assentos: {car?.numeroDeAssentos}</Text>
          </View>
          <View style={styles.row}>
            <Text>Cor: {car?.cor ? car?.cor : 'Não cadastrado'}</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ marginBottom: 5 }}>Descrição:</Text>
            <Text>{!car?.descricao ? 'Sem descriçao' : car?.descricao}</Text>
          </View>
        </ScrollView>
        <Button style={styles.rentButton} onPress={() => { setVisible(false); navigation.navigate('RequestRent', { car: car }) }}>Alugar</Button>
      </View>
    </Modal>
  )
}
