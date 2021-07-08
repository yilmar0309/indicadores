import { StyleSheet } from 'react-native';
import { ConfigEntity } from '@hooks/useConfigTheme';

export default (props: ConfigEntity) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      marginTop: 20,
      textAlign: 'center',
    },
  })
}
