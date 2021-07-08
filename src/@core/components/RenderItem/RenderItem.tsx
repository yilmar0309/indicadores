import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Map as ImmutableMap } from 'immutable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { 
  item: ImmutableMap<string, any>;
  onPress: (item: ImmutableMap<string, any>) => void;
  onPressInfo: (item: ImmutableMap<string, any>) => void;
}

const RenderItem: React.FC<Props> = (props) => {
  const { item, onPress, onPressInfo } = props;
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  const onPresItem = () => onPress(item)
  const onPressInfoItem = () => onPressInfo(item)

  return (
    <View  style={styles.container} >
      <TouchableOpacity style={styles.boxText} onPress={onPresItem}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{item.getIn(['data', 'nombre'])}</Text>
        <Text style={styles.text}>{item.getIn(['data', 'unidad_medida'])}</Text>
      </TouchableOpacity>
      <View style={styles.boxIcons}>
        <TouchableOpacity onPress={onPressInfoItem}>
          <MaterialCommunityIcons name='information-outline' size={25} color='#2E86C1' />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPresItem}>
          <MaterialCommunityIcons name='chevron-right' size={25} color='#aaa' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RenderItem;
