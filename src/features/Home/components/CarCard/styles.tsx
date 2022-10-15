import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width / 2 - 30

export const styles = StyleSheet.create({
    card: {
        width: width,
        height: 171,
        borderColor: '#C8004C',
        borderWidth: 2,
        borderRadius: 20,
        margin: 5,
    },
    touchable: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '70%',
    },
    title: {
        textAlign: 'center',
        paddingTop: 8,
        paddingHorizontal: 5
    }
})