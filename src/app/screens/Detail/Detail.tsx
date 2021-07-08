import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fromJS, Map as ImmutableMap } from 'immutable';

import useConfigTheme from '@hooks/useConfigTheme';

import { SlicesDetail } from '@navigation/interfaceInject';

import List from '@components/List/List';
import HeaderBack from '@components/HeaderBack/HeaderBack';
import RenderItemDetail from '@components/RenderItemDetail/RenderItemDetail';

import useStyles from './styles';
import { ActivityIndicator } from 'react-native';

interface Props {
  navigation: any;
  route: any;
}

const Detail: React.FC<Props & SlicesDetail> = (props) => {
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  const dispatch = useDispatch()
  const seriesRedux = useSelector(({ indicadores }: { indicadores: any }) => indicadores.series);

  const [data, setData] = useState(fromJS([]));
  const [loadingRefresh, setLoadingRefresh] = useState(true)

  useEffect(() => {
    async function fetch() {
      try {
        await dispatch(props.getIndicadoresByTypeRedux(props.route.params?.item.name));
        setLoadingRefresh(false);
      } catch (error) {
        console.log('**** ERROR in View *****', error);
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    console.log('seriesRedux', seriesRedux)
    setData(fromJS(seriesRedux))
  }, [seriesRedux])

  const onRefresh = async () => {
    try {
      setLoadingRefresh(true);
      await dispatch(props.getIndicadoresByTypeRedux(props.route.params?.item.name))
      setLoadingRefresh(false);
    } catch (error) {
      setLoadingRefresh(false);
    }
  }

  const renderItem = ({ item, index }: { item: ImmutableMap<string, any>, index: number }) => (
    <RenderItemDetail item={item} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        routerBack='Indicadores'
        title={props.route.params?.item?.data?.nombre}
        onPress={props.navigation.goBack}
      />
      {loadingRefresh ? (
        <ActivityIndicator color='black' size={30} style={{ margin: 20 }} />
      ) : (
        <List
          dataSource={data}
          extraData={fromJS(seriesRedux)}
          renderItem={renderItem}
          refreshing={loadingRefresh}
          onRefresh={onRefresh}
        />
      )}

    </SafeAreaView>
  )
}

export default Detail;
