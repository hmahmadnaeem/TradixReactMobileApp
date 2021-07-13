import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const LoginStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
    // paddingHorizontal: 20,
  },
  coinBookImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  coinBookImgStyle: {},
  //   logoImgContainer: {position: 'absolute', bottom: 10},
  inputFiledMainContainer: {
    marginHorizontal: 63,
    // alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    // marginVertical: 20,
  },
  loginEmailInputCoontainer: {
    marginTop: 23,
  },
  loginPasswordInputCoontainer: {
    marginTop: 15,
  },
  loginButtonCoontainer: {
    marginTop: 15,
  },
  logingBtnBelowTextContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 80,

    marginTop: 15,
  },
  LoginBtnLeftText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    color: Color.grayPlaceholderClr,
  },
  LoginBtnRightText: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    color: Color.grayPlaceholderClr,
  },
});
export default LoginStyle;
