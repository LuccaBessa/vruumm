import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    // width: Dimensions.get('screen').width * 0.95,
    height: Dimensions.get('screen').height * 0.80,
    marginHorizontal: 20,
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
    marginVertical: 10
  },
  title: {
    textAlign: 'center',
  },
  divider: {
    marginVertical: 10
  },
  scroll: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  info: {
    width: '50%',
    padding: 5
  },
  description: {
    width: '100%',
    flexDirection: 'column',
    padding: 5
  },
  rentButton: {
    borderRadius: 50,
    padding: 10
  }
})