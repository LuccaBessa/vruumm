import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8004c',
    height: '100%',
    width: '100%',
    padding: 20
  },
  logoContainer: {
    height: '40%',
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 200,
    width: 200,
  },
  formContainer: {
    // backgroundColor: 'blue',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20
  },
  input: {
    width: '100%',
    borderRadius: 50,
  },
  loginButton: {
    width: '50%',
    borderRadius: 50,
    borderColor: 'white'
  },
  registerContainer: {
    // backgroundColor: 'green',
    height: '10%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})
