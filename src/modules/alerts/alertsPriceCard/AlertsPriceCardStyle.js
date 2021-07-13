import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const AlertsPriceCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    paddingLeft: 18,
    paddingRight: 9,
  },
  alertsPriceCardMainContainer: {
    backgroundColor: Color.whiteClr,
    borderRadius: 15,
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandNameContainer: {
    marginLeft: 35,
    marginVertical: 17,
  },
  //   right
  rightSideValue: {
    flexDirection: 'row',
  },
  valueStatusContainer: {
    marginRight: 12,
  },
  statusArrowContainer: {
    marginRight: 5,
  },
  statusArrowIcon: {},
  shareRateContainer: {
    marginRight: 54,
  },
  crossWithCircleIcon: {
    position: 'absolute',
    right: 5,
    top: -27,
  },
  brandNameText: {
    fontFamily: 'Raleway-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    //   color:Color
  },
  currentDate: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 11,
  },
  valueStatus: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
  },
  shareRate: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
});
export default AlertsPriceCardStyle;
