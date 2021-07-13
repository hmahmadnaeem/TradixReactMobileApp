import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const OnboardingScreenTwoStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  onboadingHeaderContainer: {
    marginTop: 50,
  },
  textContainer: {
    marginTop: 21,
  },
  centerBodyImage: {
    // marginTop: 50,
    width: '100%',
    position: 'absolute',
    top: 80,
  },
  characterBodyImg: {
    alignSelf: 'center',
    marginTop: 52,
  },
  footerContainer: {
    marginTop: 7,
  },
});
export default OnboardingScreenTwoStyle;
