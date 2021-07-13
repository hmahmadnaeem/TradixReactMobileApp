import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const ShareValueStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // // backgroundColor: '#00ff00',
    // // paddingTop: 100,
    // paddingHorizontal: 20,
    marginLeft: 33,
    marginRight: 19,
  },
  stockValuMainContainer: {
    // backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Color.highDarkGrayClr,
    marginTop: 20,

    // width: '30%',
  },
  brandNameContainer: {width: '30%'},
  appleText: {fontFamily: 'Raleway-Bold', fontWeight: 'bold', fontSize: 16},

  appleTimeText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 16,
  },
  shareValueContainer: {width: '30%', justifyContent: 'flex-end'},
  priceInUsd: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'right',
  },
  priceInPercentage: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'right',
  },
  upWordArrow: {
    // backgroundColor: 'red',
    top: 14,
  },
  upWordArrowContainer: {
    // backgroundColor: 'yellow',
    marginLeft: 15,
  },
  numberOfShareContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'aqua',
  },
  coloredValueContainer: {
    // backgroundColor: Color.primaryClr,
    borderRadius: 50,
  },
  coloredValue: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    padding: 12,
  },
  lowerValue: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'center',
  },
});
export default ShareValueStyle;
