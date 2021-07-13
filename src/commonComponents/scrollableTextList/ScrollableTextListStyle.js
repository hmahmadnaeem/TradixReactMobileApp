import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const ScrollableTextListStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },

  scrollableTextContainer: {
    // paddingVertical: 6,
    marginHorizontal: 10,
    borderRadius: 25,
    // backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 11,
    alignSelf: 'center',
  },
  scrollableText: {
    marginVertical: 6,

    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 12,
  },
});
export default ScrollableTextListStyle;
