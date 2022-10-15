import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
  },
  searchInput: {
    borderRadius: 50,
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  noCarsView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCarsText: {
    color: '#c8004c'
  }
})
