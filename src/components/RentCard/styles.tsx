import { StyleSheet } from 'react-native'

export const styles = (status: string) => {
  let flagColor;

  if (status == 'pendente') flagColor = '#ff9800'
  if (status == 'em_andamento') flagColor = '#2196f3'
  if (status == 'rejeitado') flagColor = '#ff5722'
  if (status == 'finalizado') flagColor = '#009688'

  return StyleSheet.create({
    card: {
      display: 'flex',
      width: '100%',
      height: 250,
      borderColor: '#C8004C',
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
      padding: 10
    },
    title: {
      textAlign: 'center',
      paddingTop: 8,
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
      width: '35%',
      padding: 10,
      marginTop: 5,
      borderRadius: 50,
      justifyContent: 'center'
    },
    flagText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })
}