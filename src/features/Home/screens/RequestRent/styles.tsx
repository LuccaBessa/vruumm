import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#c8004c',
    textAlign: 'center'
  },
  calendar: {
    width: '100%',
  },
  total: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlign: 'right',
    color: '#c8004c'
  },
  footerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cancelButton: {
    width: '45%',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#c8004c',
    justifyContent: 'center',
  },
  cancelText: {
    textAlign: 'center',
    color: '#c8004c'
  },
  confirmButton: {
    width: '45%',
    borderRadius: 50,
  }
})