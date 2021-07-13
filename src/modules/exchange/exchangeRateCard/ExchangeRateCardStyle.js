import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const ExchangeRateCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'lightgray',
    // paddingTop: 100,
    paddingHorizontal: 35,
  },
  rateCardContainer: {
    backgroundColor: Color.whiteClr,
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    borderRadius: 25,
  },
  currencyText: {
    fontFamily: 'Raleway-Bold',
    fontWeight: '800',
    fontSize: 20,
    color: Color.highDarkGrayClr,
  },
  rateCardHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  currencyRateContainer: {
    // justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color.grayBorderClr,
    marginHorizontal: 42,
    marginTop: 12,
  },
  currencyRateText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '700',
    fontSize: 20,
    color: Color.secondryClr,
    textAlign: 'center',
    // marginHorizontal: 61,
    marginVertical: 8,
  },
  priceConversionText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 12,
    color: Color.highDarkGrayClr,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 26,
  },
});
export default ExchangeRateCardStyle;
