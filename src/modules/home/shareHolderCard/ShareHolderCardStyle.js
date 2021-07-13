import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';
//——

const ShareHolderCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  shareHolderCardMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 33,
    marginRight: 21,
    borderBottomWidth: 1,
    borderColor: Color.grayBorderClr,
    paddingVertical: 18,
  },
  leftCard: {},

  shareHolderName: {
    fontFamily: 'Raleway-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.lowDarkGrayClr,
  },
  sahreHolderTime: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    color: Color.lowDarkGrayClr,
  },
  //   right
  shareValueTimeContainer: {
    backgroundColor: Color.primaryClr,
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  shareValueTime: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
  shareValue: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
  // rightCard: {},
});
export default ShareHolderCardStyle;
