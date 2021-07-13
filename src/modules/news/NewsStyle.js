import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color/Color';

//——

const NewsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.whiteClr,
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  headerElementContainer: {
    marginTop: 44,
  },
  HeaderBgContainer: {},
  headerBg: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  mainGrayBgContianer: {
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
    marginTop: 22,
  },
  scrollTextComponentContainer: {
    marginTop: 24,
  },
  subHeaderMainContainer: {
    marginTop: 40,

    borderRadius: 15,
    alignSelf: 'center',
    marginHorizontal: 20,
  },

  subHeardeBgImg: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
  },
  editorialTextContainer: {
    backgroundColor: Color.primaryClr,
    marginTop: 42,
    marginRight: 17,
    alignSelf: 'flex-end',
    borderRadius: 15,
  },
  editorialText: {
    marginVertical: 2,
    marginHorizontal: 6,
  },
  cryptocurrenciesTextContainer: {
    marginRight: 17,
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: '#966BE860',
    paddingHorizontal: 10,
    paddingVertical: 4,
    // opacity: 0.5,
  },
  futureText: {},
  cryptocurrenciesText: {},
  // -----
  mobileBrandCardContainer: {},
  mobileBrandCardContainer: {},
  alertIconContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 20,
    top: 9,
    zIndex: 1,

    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
  },
  alertIcon: {},
  mobileBrandCardSubContainer: {
    zIndex: 0,
  },
});
export default NewsStyle;
