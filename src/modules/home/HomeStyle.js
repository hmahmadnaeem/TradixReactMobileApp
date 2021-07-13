import {StyleSheet, Platform} from 'react-native';
import {Color} from '../../theme/color/Color';

// -----

const HomeStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    // paddingTop: 100,
    // paddingHorizontal: 20,

    flex: 1,
  },
  homeHeaderBgContainer: {},
  homeHeaderBg: {position: 'absolute', width: '100%'},
  headerElementMainContianer: {
    marginHorizontal: 52,
    marginTop: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'brown',
  },
  grayHeaderBgContainer: {
    marginTop: 32,
    paddingVertical: 23,
    // paddingLeft: 19,
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
  },
  scrollerContainer: {
    // alignSelf: 'center',
  },
  loadMoreBtnContainer: {
    marginHorizontal: 127,
    marginTop: 35,
  },
});
export default HomeStyle;
