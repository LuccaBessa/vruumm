import React from 'react'
import { Text } from '@ui-kitten/components'
import { styles } from './styles';
import { Props } from './types';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export function CarCard({ id, model, image, onPressFunction }: Props) {

  const imageSource = () => {
    if (image) {
      return {
        uri: image
      }
    }

    return require('../../assets/default-car.png')
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