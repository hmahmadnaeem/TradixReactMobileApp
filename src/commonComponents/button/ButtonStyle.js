import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

const ButtonStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    // paddingHorizontal: 70,
  },
  btnContainer: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'gray',
    borderRadius: 15,
  },
  btnText: {
    fontFamily: 'Lato',
    fontSize: 14,
    fontWeight: '900',
    marginVertical: 16,
    color: Color.whiteClr,
  },
});

export default ButtonStyle;
