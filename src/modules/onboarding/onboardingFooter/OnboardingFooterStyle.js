import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const OnboardingFooterStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: Color.forEye,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  footerMainContainer: {
    marginTop: 35,
    marginBottom: 52,
    marginLeft: 62,
    marginRight: 50,

    justifyContent: 'space-between',
    flexDirection: 'row',
    // width:'100%',
    alignItems: 'center',
  },
  sliderOneImageContainer: {
    width: '50%',
  },
  footerBtnContainer: {
    width: '50%',
  },
});
export default OnboardingFooterStyle;
