import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Color} from '../../theme/color/Color';

const MenuStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 100,
    // paddingHorizontal: 20,
  },
  headerImgContainer: {},
  headerBgImg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  headerElementContainer: {
    marginTop: 45,
  },
  maryProfileMainContainer: {
    // width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
    // marginRight: 16,
    marginTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.highDarkGrayClr,
  },
  leftMryProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maryText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 17,
  },
  profileBgImgContainer: {
    borderRadius: 25,
    backgroundColor: 'red',
    width: 44,
    height: 44,
    overflow: 'hidden',
  },
  profileImg: {
    width: 44,
    height: 44,
  },
  profileImgGradient: {
    opacity: 0.25,
  },
  gradientLayerOnImg: {
    width: 44,
    height: 44,
  },
  //   right
  rightMryProfileContainer: {
    flexDirection: 'row',
  },
  settingIcon: {
    marginRight: 20,
  },
  grayBgContainer: {
    backgroundColor: Color.grayScreenBgClr,
    borderTopLeftRadius: 25,
    marginTop: 22,
  },

  borderSelf: {
    width: '100%',
    height: 1,
    backgroundColor: Color.highDarkGrayClr,
    marginVertical: 24,
  },
  toolTextContainer: {
    width: '18%',
    marginLeft: 45,
    backgroundColor: Color.primaryClr,
    borderRadius: 25,
  },
  toolText: {
    marginHorizontal: 10,
    marginVertical: 4,
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: 16,
  },
  iconTextComponentContainer: {
    marginTop: 10,
  },
  marketsTextContainer: {
    width: '22%',
    marginLeft: 45,
    backgroundColor: Color.primaryClr,
    borderRadius: 25,
  },
  marketsText: {
    marginHorizontal: 10,
    marginVertical: 4,
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: 16,
  },
});
export default MenuStyle;
