import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

const ExchangeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  headImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  HeaderElementsContainer: {
    marginTop: 44,
  },
  grayBgContianer: {
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
    marginTop: 22,
  },
  exchangeRateHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 31,
    marginTop: 19,
  },
  exhangeRateTextContianer: {
    backgroundColor: Color.primaryClr,
    borderRadius: 25,
  },
  exhangeRateText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    marginHorizontal: 11,
    marginVertical: 6,
  },
  settingIxconContainer: {
    marginRight: 20,
  },
  exhangeRateIconsContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
  },
  exchangeBodyBg: {
    width: '100%',
    position: 'absolute',
    resizeMode: 'stretch',
    top: 81,
    right: 0,
  },
  exchangeRateEurContainer: {
    marginTop: 40,
  },
  syncronizeIconContainer: {
    backgroundColor: Color.whiteClr,
    marginVertical: 13,
    borderRadius: 50,
    padding: 7,

    alignSelf: 'center',
  },
  fovrouriteTextContainer: {
    marginTop: 29,
    marginBottom: 28,
    backgroundColor: Color.primaryClr,
    paddingVertical: 5,
    // paddingHorizontal: 15,
    marginHorizontal: 137,
    borderRadius: 25,
  },
  favrotieText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 12,
    textAlign: 'center',
  },
  currentRateCardContinaer: {
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  currentRateCardSecondContinaer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 14,
  },
});
export default ExchangeStyle;
