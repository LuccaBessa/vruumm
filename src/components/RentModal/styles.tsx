import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.7,
    borderRadius: 20,
    padding: 10
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 5,
    color: '#c8004c'
  },
  total: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: '#c8004c'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  cancelButton: {
    width: '45%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#c8004c',
    justifyContent: 'center',
  },
  cancelText: {
    textAlign: 'center',
    color: '#c8004c'
  },
  confirmButton: {
    width: '45%',
    borderRadius: 5,
  }
})