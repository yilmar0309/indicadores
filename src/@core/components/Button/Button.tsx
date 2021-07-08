import React from 'react';
import { Text, View } from 'react-native';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { }

const Button: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  )
}

export default Button;
