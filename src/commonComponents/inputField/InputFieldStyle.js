import {StyleSheet} from 'react-native';
// -----
import {Color} from '../../theme/color/Color';

const InputFieldStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // backgroundColor: '#fff',
    // paddingTop: 100,
  },
  inputFiled: {
    width: '100%',
    // backgroundColor: 'rgba(245, 245, 245, 0.70)',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D6D6D6',
    paddingVertical: 15,
    paddingHorizontal: 28,
    backgroundColor: Color.grayShadeClr,
    fontFamily: 'Lato-Regular',
  },
});

export default InputFieldStyle;
