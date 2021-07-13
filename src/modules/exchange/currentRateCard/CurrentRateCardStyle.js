import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';
// -----
const CurrentRateCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    paddingHorizontal: 8,
  },
  currentRateCardContainer: {
    backgroundColor: Color.whiteClr,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.grayBorderClr,
  },
  currencyNameText: {
    fontFamily: 'Raleway-Bold',
    fontWeight: 'bold',
    fontSize: 14,
    color: Color.highDarkGrayClr,

    marginTop: 8,
  },
  currencyTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentRateArrowIcon: {
    top: 3,
  },
  priceConverterText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 11,
    color: Color.highDarkGrayClr,
    textAlign: 'center',
    marginHorizontal: 7,
    marginVertical: 5,
  },
  priceConverterTextContainer: {
    marginHorizontal: 12,
    marginTop: 7,
    marginBottom: 21,

    borderWidth: 1,
    borderColor: Color.grayBorderClr,
  },
});
export default CurrentRateCardStyle;
