import {StyleSheet} from 'react-native';

import {Color} from '../../theme/color/Color';
//——

const AlertsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  headerBg: {
    position: 'absolute',
    width: '100%',
  },
  headerElementsContianer: {
    marginTop: 51,
  },
  grayBgMainContainer: {
    backgroundColor: Color.grayScreenBgClr,
    marginTop: 33,
    borderTopLeftRadius: 25,
  },
  lastHContainer: {
    width: 83,
    marginLeft: 27,
    marginTop: 25,
    backgroundColor: Color.primaryClr,
    borderRadius: 25,
  },
  lastHText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    color: Color.whiteClr,
    marginHorizontal: 12,
    marginVertical: 5,
    textAlign: 'center',
  },
  firstAlertCardContainer: {
    paddingTop: 16,
  },
  secondAlertCardContainer: {
    marginTop: 15,
  },
  orderAlertsContainer: {
    backgroundColor: Color.primaryClr,
    marginTop: 26,
    borderRadius: 25,
    width: 114,
    marginLeft: 27,
  },
  orderAlertsText: {
    fontFamily: 'Lato',
    fontWeight: 'normal',
    fontSize: 12,
    color: Color.whiteClr,
    marginHorizontal: 14,
    marginVertical: 5,
  },
  thirdAlertCardContainer: {
    marginTop: 21,
  },
  fourthAlertCardContainer: {
    marginTop: 15,
  },
  buySellBtnContainer: {
    marginTop: 51,
    backgroundColor: Color.whiteClr,
    width: '100%',
  },
  createBorder: {
    marginHorizontal: 20,
    borderTopColor: 'black',
    borderWidth: 0.3,
    opacity: 0.5,
  },
  tradingNowContainer: {
    width: 114,
    backgroundColor: Color.primaryClr,
    alignSelf: 'center',
    top: -13,
    borderRadius: 25,
  },

  tradingNowText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 13,
    marginVertical: 5,
  },
  bothBtnContainer: {
    marginTop: 30,
    marginHorizontal: 33,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buyBtnContainer: {
    marginHorizontal: 13,
    width: 124,
  },
  sellBtnContainer: {
    width: 124,
    marginHorizontal: 13,
  },
});
export default AlertsStyle;
