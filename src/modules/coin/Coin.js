import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Systrace,
} from 'react-native';
// -----
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

// -----
import CoinStyle from './CoinStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTextList from '../../commonComponents/scrollableTextList/ScrollableTextList';
import {Color} from '../../theme/color/Color';
// -----
function Coin({navigation}) {
  const scrollerTextArr = [
    {
      scrollableText: 'EDITORIAL',
      bgClr: Color.primaryClr,
    },
    {
      scrollableText: 'CRYPTO NEWS',
    },
    {
      scrollableText: 'RAW MATERIAL',
    },
    {
      scrollableText: 'ECONOMICS',
    },
    {
      scrollableText: 'SCROLL TEXT',
    },
  ];
  // <============== process Chart <==============>
  const dataProgress = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };
  // <============== Bar Chart <==============>

  const barChartObj = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  // -----
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 5, // optional
      },
    ],
    legend: ['Rainy Days'], // optional
  };

  return (
    <ScrollView style={CoinStyle.mainContainer}>
      <View style={CoinStyle.headerElementContainer}>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
          // left 2
          // conditionSelectorLeftTwo
          leftTextTwo="NEO INDEX"
          // right 1
          conditionSelectorRightOne
          iconImgRightOne={require('../../assects/icons/bellIcon.png')}
          rightImgContOneBgClr="#000"
          // right 2
          conditionSelectorRightTwo
          iconImgRightTwo={require('../../assects/icons/verticalMenuIcon.png')}
        />
      </View>
      {/* --- */}
      {/* --- */}
      <View style={CoinStyle.headerSubText}>
        <Text style={CoinStyle.usdText}>USD</Text>
        <Text style={CoinStyle.binanceText}>Binance</Text>
      </View>
      <LinearGradient
        colors={['#370BF0', '#F020D8']}
        style={CoinStyle.currentValueCard}>
        <View style={CoinStyle.leftSideContainer}>
          <View style={CoinStyle.arrowImgContainer}>
            <Image source={require('../../assects/icons/arrowUpWord.png')} />
          </View>
          <View>
            <Text style={CoinStyle.rateText}>RATE</Text>
            <Text style={CoinStyle.priceUsd}>21,1637 USD</Text>
            <Text style={CoinStyle.realTimeText}>17:00:33 Real time</Text>
          </View>
        </View>
        <View>
          <Text style={CoinStyle.todayChange}>TODAY CHANGE</Text>
          <Text style={CoinStyle.percentageRate}>+2,0634 (+9,44%)</Text>
        </View>
      </LinearGradient>
      {/* --- */}
      <View style={CoinStyle.twoSideArrow}>
        <View>
          <Image source={require('../../assects/icons/leftTailIcon.png')} />
        </View>
        <View>
          <TouchableOpacity
            style={CoinStyle.neoChartTextContainer}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={CoinStyle.neoChartText}>NEO Chart</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require('../../assects/icons/rightTailIcon.png')} />
        </View>
      </View>
      {/* --- */}
      <View style={CoinStyle.lineChartContainer}>
        <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    20, 40, 60, 80, 100, 80, 60, 40, 20, 40, 60, 80, 100, 80,
                    60, 40, 20,
                    // Math.random() * 100,
                    // Math.random() * 100,
                    // Math.random() * 100,
                    // Math.random() * 100,
                    // Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 50} // from react-native
            height={150}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: Color.whiteClr,
              backgroundGradientFrom: Color.whiteClr,
              backgroundGradientTo: Color.whiteClr,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(288, 50, 193, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(288, 50, 193, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              // marginHorizontal: 20,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
      {/* --- */}
      <View style={CoinStyle.grayBgContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={CoinStyle.scrollerContainer}>
          {scrollerTextArr.map(item => {
            return <ScrollableTextList item={item} />;
          })}
        </ScrollView>

        <View style={CoinStyle.twoGraphContianer}>
          <View style={CoinStyle.progressRingContainer}>
            {/* <Text style={CoinStyle.buySellText}>Buy or Sell for NEO</Text> */}
            <ProgressChart
              data={dataProgress}
              width={110}
              height={117}
              strokeWidth={5}
              radius={25}
              chartConfig={chartConfig}
              hideLegend={false}
            />
          </View>
          <View style={CoinStyle.addSpace}></View>
          <View style={CoinStyle.barChartContainer}>
            {/* <Text style={CoinStyle.mktText}>Mkt Capitalization</Text> */}
            <BarChart
              style={{width: 200, height: 200}}
              data={barChartObj}
              width={200}
              height={100}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
          <View style={CoinStyle.addSpace}></View>
        </View>
      </View>
      {/* --- */}
      {/* <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </View> */}
      {/* --- */}
    </ScrollView>
  );
}
export default Coin;
