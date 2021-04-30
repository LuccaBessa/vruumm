import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10
  },
  avatar: {
    height: '90%',
    width: '30%',
  },
  mainInfo: {
    height: '17%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentInfo: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rentNumberText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rentText: {
    textAlign: 'center',
  },
  emailText: {
    paddingVertical: 20,
    fontSize: 17,
  },
  edit: {
    width: '100%',
    height: '5%',
    borderColor: '#c8004c',
    borderWidth: 2,
    borderRadius: 5,
  },
  editText: {
    color: '#c8004c',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  personalInfo: {
    width: '100%',
    height: '15%',
    paddingVertical: 10,
  },
  infoTitle: {
    color: '#c8004c',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  personalInfoText: {
    fontSize: 15,
    marginBottom: 5
  },
  addressInfo: {
    width: '100%',
    height: '40%',
    paddingVertical: 10,
  },
  addressGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  addressInfoText: {
    width: '50%',
    fontSize: 15,
    marginBottom: 5
  },
})
