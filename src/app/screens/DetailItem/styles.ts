import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.backgroundScreens
    },
    valor: {
      color: '#0784D8',
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    containerBox: {
      height: 150,
      flexDirection: 'row',
    },
    box: {
      flex: 1,
      margin: 1,
    },
    text: {
      textAlign: 'left',
      marginVertical: 10,
      marginLeft: '20%',
      padding: 5,
    },
    info: {
      textAlign: 'right',
      marginVertical: 10,
      marginRight: '20%',
      borderRadius: 3,
      borderWidth: 0.5,
      borderColor: '#aaa',
      padding: 5,
    }
  })
}
