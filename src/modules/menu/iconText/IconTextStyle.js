import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const IconTextStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    marginLeft: 50,
    marginTop: 21,
  },
  iconTextMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContianer: {},
  iconTextContainer: {
    marginLeft: 10,
  },
  iconText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: 15,
    color: Color.grayNormalClor,
  },
});
export default IconTextStyle;
