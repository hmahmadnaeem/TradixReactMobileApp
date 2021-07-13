import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

const CoinStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
  },
  headerElementContainer: {
    marginTop: 50,
  },
  headerSubText: {
    marginLeft: 62,
    flexDirection: 'row',
  },
  usdText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: 12,
  },

  binanceText: {
    marginLeft: 9,

    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 13,
  },
  lineChartContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  currentValueCard: {
    marginHorizontal: 27,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 18,
    paddingLeft: 18,
    paddingRight: 28,
  },
  leftSideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowImgContainer: {
    marginRight: 7,
  },
  rateText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 10,
    color: Color.whiteClr,
  },
  priceUsd: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '800',
    fontSize: 22,
    color: Color.whiteClr,
  },
  realTimeText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 10,
    color: Color.whiteClr,
  },
  todayChange: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 10,
    color: Color.whiteClr,
  },
  percentageRate: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    color: Color.whiteClr,
  },
  twoSideArrow: {
    marginHorizontal: 36,
    marginTop: 23,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  neoChartTextContainer: {
    backgroundColor: Color.primaryClr,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  neoChartText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
  scrollerContainer: {
    marginTop: 21,
  },
  grayBgContainer: {
    marginTop: 28,
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
  },
  twoGraphContianer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
    marginHorizontal: 30,
  },
  progressRingContainer: {
    width: '30%',
    // height: '14%',
    backgroundColor: Color.whiteClr,
    borderRadius: 25,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,

    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // backgroundColor: 'red',
  },
  barChartContainer: {
    backgroundColor: Color.whiteClr,
    borderRadius: 25,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // width: '48%',
    // backgroundColor: 'aqua',
  },
  addSpace: {
    width: '10%',
  },
  buySellText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 10,
    textAlign: 'center',
  },
  mktText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 10,
  },
});
export default CoinStyle;
