import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  navigation: any;
}

const UIKit: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>UIKit</Text>
    </SafeAreaView>
  )
}

export default UIKit;
