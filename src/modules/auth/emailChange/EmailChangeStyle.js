import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

const EmailChangeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  paperImgContainer: {
    alignItems: 'center',
  },
  paperImg: {
    // position: 'absolute',
    top: -60,
  },
  emailReceviedTextContainer: {
    alignItems: 'center',
    marginHorizontal: 60,
    marginTop: 31,
    // textAlign: 'center',
  },
  emailReceviedText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Raleway-Bold',
  },
  resendEmailBtnContainer: {
    marginHorizontal: 63,
    marginTop: 43,
  },
  WaitingText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
  },
});
export default EmailChangeStyle;
