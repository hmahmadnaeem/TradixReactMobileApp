import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const CancelAlertsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#00ff00',
    paddingTop: 100,
    // paddingHorizontal: 20,
  },
  cancelAlertsMainContainer: {
    marginHorizontal: 27,
    backgroundColor: Color.whiteClr,
    borderRadius: 25,
  },
  cancelAlertsTextContainer: {
    marginHorizontal: 77,
  },
  cancelAlertsText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 21,
  },
  callingAlertCard: {
    marginHorizontal: 30,
    marginVertical: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.grayBorderClr,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appleText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 19,
  },
  aboveText: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
    marginRight: 10,
  },
  aboveTextContainer: {marginRight: 10},
  arrowIconContainer: {
    marginRight: 7,
  },
  rightSideContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  priceRateText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
  bothBtnContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 26,
  },
  yesBtnContainer: {
    marginHorizontal: 5,
    width: '40%',
  },
  noBtnContainer: {
    marginHorizontal: 5,
    width: '40%',
  },
  crossIconContainer: {
    // width: '100%',
    // backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  crossIconStyle: {
    // justifyContent: 'flex-end',
    top: 14,
    right: 12,
  },
});
export default CancelAlertsStyle;
