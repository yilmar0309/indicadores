import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { sendMessageSnackbar } from '@utils/message';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
  navigation: any;
}

const Splash: React.FC<Props> = () => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  useEffect(() => {
    sendMessageSnackbar('Menor', 'success', Snackbar.LENGTH_LONG);
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Splash</Text>
    </SafeAreaView>
  )
}

export default Splash;
