import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      height: 60,
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'center',
      paddingHorizontal: '5%',
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaa'
    },
    date: {
      color: '#2E86C1',
      fontSize: 16,
    },
    valor: {
      color: 'black',
      fontSize: 16,
    }
  })
};
