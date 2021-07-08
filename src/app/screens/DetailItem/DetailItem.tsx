import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format, parseISO } from 'date-fns';
import { fromJS, Map as ImmutableMap } from 'immutable';
import {
  LineChart,
} from "react-native-chart-kit";
import LineGraph from '@chartiful/react-native-line-graph'
import PureChart from 'react-native-pure-chart';

import { SlicesDetail } from '@navigation/interfaceInject';

import useConfigTheme from '@hooks/useConfigTheme';

import HeaderBack from '@components/HeaderBack/HeaderBack';

import useStyles from './styles';

interface Props {
  navigation: any;
  route: any;
}

const DetailItem: React.FC<Props & SlicesDetail> = (props) => {
  const { item } = props.route.params;
  const { configTheme } = useConfigTheme();
  const styles = useStyles(configTheme);

  const dispatch = useDispatch()
  const seriesRedux = useSelector(({ indicadores }: { indicadores: any }) => indicadores.series);

  const [data, setData] = useState(fromJS([]));
  const [numbers, setNumbers] = useState<number[]>([]);
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
    setData(fromJS(seriesRedux.slice(0, 10)))
    setNumbers(seriesRedux.slice(0, 10).map((e: any) => e.valor))
  }, [seriesRedux])


  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        routerBack='Indicadores'
        title={props.route.params?.item?.data?.nombre}
        onPress={props.navigation.goBack}
      />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={styles.valor}>$ {item.data.valor}</Text>
        <View style={styles.containerBox}>
          <View style={styles.box}>
            <Text style={styles.text}>Nombre</Text>
            <Text style={styles.text}>Fecha</Text>
            <Text style={styles.text}>Unidad de Medidad</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.info}>{item.data.nombre}</Text>
            <Text style={styles.info}>{format(parseISO(item.data.fecha), 'yyyy-MM-dd')}</Text>
            <Text style={styles.info}>{item.data.unidad_medida}</Text>
          </View>
        </View>


        {data.size > 0 && !loadingRefresh ? (
          <LineChart
            data={{
              labels: [format(parseISO(data.getIn([0, 'fecha'])), 'yyyy-MM-dd'), format(parseISO(data.getIn([4, 'fecha'])), 'yyyy-MM-dd'), format(parseISO(data.getIn([9, 'fecha'])), 'yyyy-MM-dd')],
              datasets: [
                {
                  data: numbers,
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={300}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#2E86C1",
              backgroundGradientFrom: "#2E86C1",
              backgroundGradientTo: "#2E86C1",
              decimalPlaces: 1, // optional, defaults to 2dp
              barPercentage: 0.5,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: "3",
                strokeWidth: "1",
                stroke: "white"
              },
            }}
            bezier
            style={{
              borderRadius: 16,
            }}
          />
        ) : (<ActivityIndicator color='black' size={30} style={{ margin: 20 }} />)}
        {data.size > 0 && (
          <PureChart
            data={data.toJS().map((e: any) => ({ x: format(parseISO(e.fecha), 'yyyy-MM-dd'), y: e.valor }))} type='line'
            customValueRenderer={(index: number, point: any) => {
              if (index % 2 === 0) return null
              return (
                <Text style={{ textAlign: 'center' }}>{point.y}</Text>
              )
            }}
          />
        )}
        {data.size > 0 && (
          <LineGraph
            data={numbers}
            width={375}
            height={300}
            isBezier
            hasShadow
            style={{
              marginTop: 30
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailItem;
