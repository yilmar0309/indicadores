import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { 
  iconName: string;
  iconColor: string;
  title: string;
  onPress: () => void;
}

const Header: React.FC<Props> = (props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container}>
      <TouchableOpacity { ...props }>
        <MaterialCommunityIcons name={props.iconName} color={props.iconColor} size={40} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <MaterialCommunityIcons name={props.iconName} color='transparent' size={40} />
    </View>
  )
}

export default Header;
