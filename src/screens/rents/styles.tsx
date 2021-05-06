import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20
  },
  scroll: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center'
  },
})
