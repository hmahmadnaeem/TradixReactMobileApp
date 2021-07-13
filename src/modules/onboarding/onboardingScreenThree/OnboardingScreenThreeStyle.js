import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const OnboardingScreenThreeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  onboadingHeaderContainer: {
    marginTop: 50,
  },
  centerBodyImage: {
    width: '100%',
    position: 'absolute',
    top: 73,
  },
  characterBodyImg: {
    marginTop: 59,
    alignSelf: 'center',
  },
  textContainer: {
    marginTop: 55,
  },
  footerContainer: {
    marginTop: 30,
  },
});
export default OnboardingScreenThreeStyle;
