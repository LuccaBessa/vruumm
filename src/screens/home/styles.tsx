import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingVertical: 20
  },
  searchInput: {
    borderRadius: 50,
    paddingHorizontal: 20
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
