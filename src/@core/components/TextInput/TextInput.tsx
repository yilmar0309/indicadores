import React from 'react';
import { Text, View } from 'react-native';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { }

const TextInput: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container}>
      <Text>TextInput2</Text>
    </View>
  )
}

export default TextInput;
