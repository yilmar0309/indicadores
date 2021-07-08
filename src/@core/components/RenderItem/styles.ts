import { StyleSheet } from 'react-native';

import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '5%',
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaa'
    },
    boxText: {
      flex: 1,
      height: '100%',
    },
    boxIcons: {
      flexDirection: 'row',
    },
    title: {
      width: '80%',
      fontSize: 17,
      fontWeight: '600',
      color: props.textDark,
    },
    text: {
      fontSize: 12,
      fontWeight: '600',
      color: '#2E86C1',
      marginTop: 10,
    }
  })
};
