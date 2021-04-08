import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
    backgroundColor: '#c8004c'
  },
  logoContainer: {
    height: '40%',
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    height: 180,
    width: 180,
  },
  formContainer: {
    height: '40%',
    // backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    borderRadius: 50,
    marginBottom: 20,
  },
  loginButton: {
    width: '50%',
    borderRadius: 50,
    borderColor: 'white'
  },
  registerContainer: {
    height: '20%',
    // backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})
