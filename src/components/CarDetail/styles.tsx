import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    width: Dimensions.get('screen').width * 0.95,
    height: Dimensions.get('screen').height * 0.75,
    borderRadius: 20,
    padding: 10
  },
  closeButton: {
    alignSelf: 'flex-end'
  },
  closeIcon: {
    width: 30,
    height: 30,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '90%',
    height: '45%',
    alignSelf: 'center',
    margin: 5
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 5
  },
  divider: {
    marginVertical: 5
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
    justifyContent: 'flex-start'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  description: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 5
  },
  rentButton: {
    borderRadius: 50,
    padding: 10
  },
  checkIcon: {
    width: 100,
    height: 100,
  },
})