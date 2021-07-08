import React from 'react';
import { Text, View, VirtualizedList } from 'react-native';
import { List as ImmutableList, Map as ImmutableMap } from 'immutable';

import useConfigTheme from '@hooks/useConfigTheme';
import useStyles from './styles';

interface Props {
  dataSource: ImmutableList<ImmutableMap<string, any>>;
  renderItem: (item: any) => JSX.Element;
  refreshing: boolean;
  onEndReachedThreshold?: number;
  onEndReached?: () => void;
  onRefresh?: () => void;
  extraData: any;
}

const List: React.FC<Props> = (props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  const { dataSource } = props;
  const getItem = (data: any, index: number) => data.get(index);
  const getItemCount = () =>
  dataSource.size;
  const keyExtractor = (item: ImmutableMap<string, any>, index: number) => `${item.size}-${index}`;
  const noFoundData = () => <Text style={styles.text}>No hay información *</Text>;

  return (
    <View style={styles.container}>
      <VirtualizedList
        { ...props }
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        getItem={getItem}
        getItemCount={getItemCount}
        data={dataSource}
        keyExtractor={keyExtractor}
        ListEmptyComponent={noFoundData}
      />
    </View>
  )
}

export default List;
