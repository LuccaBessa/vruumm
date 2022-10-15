import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#c8004c',
    height: '100%',
    width: '100%',
  },
  layout: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c8004c',
    height: '100%',
    width: '100%',
    padding: 20,
  },
  logo: {
    height: 200,
    width: 200,
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderRadius: 50,
  },
  loginButton: {
    borderRadius: 50,
    borderColor: 'white',
  },
  registerContainer: {
    flexDirection: 'column',
  }
})