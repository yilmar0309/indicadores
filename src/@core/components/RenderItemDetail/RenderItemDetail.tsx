import React from 'react';
import { Text, View } from 'react-native';
import { Map as ImmutableMap } from 'immutable';
import { format, parseISO } from 'date-fns';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props { 
  item: ImmutableMap<string, any>;
}

const RenderItemDetail: React.FC<Props> = (props) => {
  const { item } = props;
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  return (
    <View style={styles.container} >
      <Text style={styles.date}>{format(parseISO(item.get('fecha')), 'yyyy-MM-dd')}</Text>
      <Text style={styles.valor}>$ {item.get('valor')}</Text>
    </View>
  )
}

export default RenderItemDetail;
