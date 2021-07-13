import {StyleSheet} from 'react-native';

const HeaderElementsStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // paddingTop: 100,
    paddingHorizontal: 30,
  },
  headerContainer: {
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 30,
  },
  leftMainContainer: {
    // backgroundColor: 'white',
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftMainContainerOne: {
    // backgroundColor: 'aqua',
  },

  leftMainContainerTwo: {
    marginLeft: 10,
    // backgroundColor: 'orange',
  },
  leftTextTwo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Raleway-Bold',
  },

  //   start right container
  rightMainContainer: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    // padding: 10,
    alignItems: 'center',
  },

  rightMainContainerOne: {
    padding: 8,
    // width: 37,
    // height: 37,
    // backgroundColor: 'black',
    marginRight: 10,
    borderRadius: 50,
  },
  rightMainContainerTwo: {
    // backgroundColor: 'aqua',
  },
  rightImgContOne: {
    // width: 37,
    // height: 37,
  },
});
export default HeaderElementsStyle;
