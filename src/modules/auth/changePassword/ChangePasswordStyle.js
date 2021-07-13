import {StyleSheet} from 'react-native';

const ChangePasswordStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  headerImgContainer: {
    alignItems: 'flex-end',
  },
  logoImgContainer: {
    alignItems: 'center',
  },

  passwordChangedTextContainer: {
    marginTop: 37,
    marginHorizontal: 45,
  },
  passwordChangedText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
  },
  newPasswordTextContainer: {
    marginTop: 14,
    marginHorizontal: 68,
  },
  newPasswordText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
  },
  changePasswordMainImgContainer: {
    alignItems: 'center',
    // top: -45,
  },
  mainBgImg: {
    width: '100%',
    height: 392,
    top: -45,
    alignItems: 'center',
  },
  girlImg: {
    marginTop: 70,
  },
  loginBtnContainer: {
    marginHorizontal: 63,
    marginTop: 50,
  },
});
export default ChangePasswordStyle;
