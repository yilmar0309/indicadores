import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { 
  title: string;
  routerBack: string;
  onPress: () => void;
}

const HeaderBack: React.FC<Props> = (props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container}>
      <TouchableOpacity { ...props } style={styles.boxBack}>
        <MaterialCommunityIcons name='chevron-left' color='#2E86C1' size={40} />
        <Text style={styles.titleBack}>{props.routerBack}</Text>
      </TouchableOpacity>
      <View style={styles.boxTextCenter}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{props.title}</Text>
      </View>
      <View style={{ width: '30%' }} />
    </View>
  )
}

export default HeaderBack;
