import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8004c',
    height: '100%',
    width: '100%',
  },
  scrollContainer: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    // backgroundColor: 'yellow',
    height: '30%',
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
    height: '70%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    borderRadius: 50,
  },
  signUpButton: {
    width: '50%',
    borderRadius: 50,
    borderColor: 'white'
  }
})
