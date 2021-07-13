import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

//——

const NewsArticleStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  newsArticleHeaderBgContainer: {},
  newsArticleHeaderBg: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  headerElementsContianer: {
    marginTop: 44,
  },
  grayMainContainer: {
    marginTop: 22,
    borderTopLeftRadius: 25,
    backgroundColor: Color.grayScreenBgClr,
  },
  scrollerContainer: {
    marginTop: 24,
  },
  mainBodyImgContainer: {
    marginTop: 28,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mainBodyImg: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
  },
  CRYPTOCURRENCYTextContainer: {
    alignSelf: 'flex-end',
    marginRight: 43,
    marginTop: 24,
    backgroundColor: Color.primaryClr,
    borderRadius: 15,
  },
  CRYPTOCURRENCYText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 9,
    marginVertical: 2,
    marginHorizontal: 4,
  },
  calenderDateContainer: {
    marginTop: 11,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  dateText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    fontSize: 12,
    marginTop: 9,
  },
  futureCryptoTextContainer: {
    backgroundColor: Color.gradientBlueClr,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  futureText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: 'normal',
    fontSize: 18,
    color: Color.whiteClr,
  },
  cryptoText: {
    fontFamily: 'Raleway-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    color: Color.whiteClr,
  },
  longParagraphText: {
    marginTop: 33,
    marginHorizontal: 33,

    fontFamily: 'Lato-Regular',
    fontWeight: 'normal',
    fontSize: 13,
    textAlign: 'justify',
  },
});
export default NewsArticleStyle;
