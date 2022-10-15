import { StyleSheet } from 'react-native'

export const styles = (status: string) => {
  let flagColor;

  if (status == 'pendente') flagColor = '#ff9800'
  if (status == 'em_andamento') flagColor = '#2196f3'
  if (status == 'rejeitado') flagColor = '#ff5722'
  if (status == 'finalizado') flagColor = '#009688'

  return StyleSheet.create({
    card: {
      flex: 1,
      borderColor: '#C8004C',
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
      padding: 20
    },
    title: {
      textAlign: 'center',
      paddingHorizontal: 5,
      fontSize: 25,
      color: '#C8004C'
    },
    text: {
      paddingVertical: 5
    },
    flag: {
      backgroundColor: flagColor,
      height: '20%',
      width: '45%',
      padding: 10,
      marginTop: 5,
      borderRadius: 50,
      justifyContent: 'center',
      alignSelf: 'flex-end'
    },
    flagText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
}