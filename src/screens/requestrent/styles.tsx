import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 10
  },
  info: {
    width: '100%',
    height: '15%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#c8004c'
  },
  infoText: {
    fontSize: 20
  },
  divider: {
    marginVertical: 5
  },
  subtitle: {
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 25,
    color: '#c8004c'
  },
  calendar: {
    width: '100%',
    height: '55%',
  },
  total: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    color: '#c8004c'
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
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