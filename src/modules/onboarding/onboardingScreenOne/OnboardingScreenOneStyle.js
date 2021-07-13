import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const OnboardingScreenOneStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  onboadingHeaderContainer: {
    marginTop: 50,
  },
  centerBodyImagesContianer: {},
  centerBodyImage: {
    position: 'absolute',
    top: 137,
    alignSelf: 'center',
    width: '100%',
  },
  characterBodyImg: {
    marginTop: 31,
    alignSelf: 'center',
  },
  footerContainer: {
    // marginTop: 35,
  },
  textContainer: {
    marginTop: 60,
  },
});
export default OnboardingScreenOneStyle;
