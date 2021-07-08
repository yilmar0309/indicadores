import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#E2E1E1',
      elevation: 3,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    boxBack: {
      flexDirection: 'row', 
      alignItems: 'center', 
      width: '30%'
    },
    titleBack: {
      marginLeft: -10,
      color: '#2E86C1',
    },
    title: {
      color: props.textDark,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    boxTextCenter: {
      width: '40%', 
      justifyContent: 'center'
    }
  })
};
