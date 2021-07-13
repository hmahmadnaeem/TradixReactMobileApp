import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const IconTextWithBgStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    // paddingHorizontal: 20,
    marginLeft: 45,
    marginVertical: 15,
  },
  iconTextWithBgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgIconContainer: {
    backgroundColor: Color.secondryClr,
    borderRadius: 50,
  },
  IconStyle: {
    margin: 9,
  },
  bgIconTextContainer: {
    marginLeft: 15,
  },
  bgIconText: {
    fontFamily: 'Raleway-SemiBold',
    fontWeight: '500',
    fontSize: 14,
  },
  //   bgIconComponentContainer
  //   bgIconComponentContainer: {},
});
export default IconTextWithBgStyle;
