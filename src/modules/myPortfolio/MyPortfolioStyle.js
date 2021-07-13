import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

const MyPortfolioStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  HeaderElementsContainer: {
    marginTop: 51,
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  myPortfolioTopBgContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myPortfolioTopBgImg: {
    width: '100%',
    height: 158,
    top: -30,
    // backgroundColor: 'red',
  },

  cardMainContainer: {
    // width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'gray',

    marginTop: 50,
    marginHorizontal: 30,
    paddingVertical: 25,
    paddingLeft: 24,
    paddingRight: 40,
    borderRadius: 15,
  },
  leftSideContainer: {},
  summaryText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: Color.whiteClr,
  },
  priceText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
    fontWeight: '700',
    color: Color.whiteClr,
  },
  // start right
  rightSideContainer: {},
  timeTextRight: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    color: Color.whiteClr,
  },
  priceTextRight: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    color: Color.whiteClr,
  },
  SharePriceMainContainer: {
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
  },
  sharePriceHeading: {
    marginTop: 19,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  portfolioHeadingContainer: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    // alignItems: 'center',
    width: '30%',
    justifyContent: 'flex-start',
  },
  portfoioTextHeading: {},
  priceHeadingContainer: {
    // backgroundColor: 'brown',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bulletedIcon: {
    top: 3,
  },
  priceTextHeading: {
    textAlign: 'right',
  },
  sortDown: {top: 6},
  holdingHeadingContainer: {
    // backgroundColor: 'aqua',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  holdingTextHeading: {
    textAlign: 'right',
  },
  // ------
  shareValueContainer: {
    marginTop: 24,
  },
  tradingBtnContainer: {
    marginTop: 20,
    marginHorizontal: 90,
  },
  profileImgGradient: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    borderRadius: 15,
    paddingVertical: 25,
    paddingLeft: 24,
    paddingRight: 42,
  },
});
export default MyPortfolioStyle;
