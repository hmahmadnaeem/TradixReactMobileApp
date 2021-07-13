import {StyleSheet} from 'react-native';
import {Color} from '../../../theme/color/Color';

//——

const MobileBrandCardStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
  },
  mobileBrandCardMainContainer: {
    marginLeft: 30,
    marginRight: 35,
    marginTop: 21,
    flexDirection: 'row',
    backgroundColor: Color.whiteClr,
    borderRadius: 10,

    borderRadius: 15,
    overflow: 'hidden',
  },

  rateFluctuationText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    fontSize: 10,
    color: Color.redShade,
  },
  mobileImgContainer: {},
  cardAllTextContainer: {
    marginLeft: 20,
    marginRight: 30,
    // alignItems:'center',
    // justifyContent: 'center',
  },
  currentDate: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 10,
    marginLeft: 32,
  },
  priceDateContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  brandNameContainer: {
    marginTop: 5,
  },
  brandName: {
    fontFamily: 'RaleWay-Bold',
    fontWeight: 'bold',
    fontSize: 14,
  },
  brandDescriptionContainer: {
    marginTop: 5,
    width: '80%',
  },
  brandDescription: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'left',
  },
  curveArrowIconContainer: {
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 15,
    right: 15,
    // alignSelf: 'flex-end',
  },
  //
});
export default MobileBrandCardStyle;
