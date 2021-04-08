import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#c8004c'
  },
  scroll: {
    height: '100%',
    width: '100%',
  },
  scrollContainer: {
    height: '100%',
    width: '100%',
    padding: 20
  },
  logoContainer: {
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    height: '80%',
    width: '80%',
  },
  formContainer: {
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    borderRadius: 50,
    marginBottom: 20,
  },
  signUpButton: {
    width: '50%',
    borderRadius: 50,
    borderColor: 'white'
  },
  registerContainer: {
    height: '20%',
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})