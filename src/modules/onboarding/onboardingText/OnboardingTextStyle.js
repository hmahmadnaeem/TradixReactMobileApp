import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const OnboardingTextStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: Color.forEye,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  onboardingTextMainContainer: {
    marginLeft: 46,
    marginRight: 65,
  },
  onboardingHeadingTextContainer: {},
  onboardingHeadingText: {
    fontFamily: 'Raleway-Bold',
    fontWeight: '800',
    fontSize: 28,
  },
  onboardingDescriptionTextContainer: {
    marginTop: 7,
  },
  onboardingDescriptionText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 14,
  },
  textContainer: {
    marginTop: 28,
  },
});
export default OnboardingTextStyle;
