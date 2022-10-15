import React from 'react'
import { Text } from '@ui-kitten/components'
import { styles } from './styles';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

interface ICarCardProps {
  id: number
  model: string
  image: string
  onPressFunction: Function
}

export const CarCard = ({ id, model, image, onPressFunction }: ICarCardProps) => {
  const imageSource = () => {
    if (image) {
      return {
        uri: image
      }
    }

    return require('../../../../assets/default-car.png')
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.touchable} onPress={() => onPressFunction(id)}>
        <Image style={styles.image} source={imageSource()} resizeMode='cover' borderTopLeftRadius={18} borderTopRightRadius={18} accessibilityLabel={'Imagem do carro'} />
        <Text style={styles.title} category='h5' numberOfLines={1}>{model}</Text>
      </TouchableOpacity>
    </View>
  )
}