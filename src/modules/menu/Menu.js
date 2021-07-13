import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// -----
import MenuStyle from './MenuStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import IconTextWithBgStyle from './iconTextWithBg/IconTextWithBgStyle';
import IconTextWithBg from './iconTextWithBg/IconTextWithBg';
import IconText from './iconText/IconText';

function Menu({navigation}) {
  const bgIconComponentArr = [
    {
      bgIcon: require('../../assects/icons/alertsIcon.png'),
      bgIconText: 'Alerts',
    },
    {
      bgIcon: require('../../assects/icons/predictionsIcon.png'),
      bgIconText: 'Predictions',
    },
    {
      bgIcon: require('../../assects/icons/savedIcon.png'),
      bgIconText: 'Saved Elements',
    },
    {
      bgIcon: require('../../assects/icons/removeIcon.png'),
      bgIconText: 'Remove Ads',
    },
  ];
  // ---
  const iconComponentArr1 = [
    {
      icons: require('../../assects/icons/selectIcon.png'),
      iconText: 'Select Stocks',
    },
  ];
  const iconComponentArr = [
    {
      icons: require('../../assects/icons/selectIcon.png'),
      iconText: 'Select Stocks',
    },
    {
      icons: require('../../assects/icons/currencyIcon.png'),
      iconText: 'Currency Exchange',
    },
    {
      icons: require('../../assects/icons/webinarIcon.png'),
      iconText: 'Webinar',
    },
    {
      icons: require('../../assects/icons/bestIcon.png'),
      iconText: 'Best Broker',
    },
  ];
  return (
    <ScrollView style={MenuStyle.mainContainer}>
      <View style={MenuStyle.headerImgContainer}>
        <Image
          resizeMode="cover"
          style={MenuStyle.headerBgImg}
          source={require('../../assects/bgImages/menuHeader.png')}
        />
        <View style={MenuStyle.headerElementContainer}></View>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
          // left 2
          // conditionSelectorLeftTwo
          leftTextTwo="MENU"
        />
        {/* </ImageBackground> */}
      </View>
      {/* --------------------------------- */}
      <View style={MenuStyle.grayBgContainer}>
        <View style={MenuStyle.maryProfileMainContainer}>
          <View style={MenuStyle.leftMryProfileContainer}>
            <View>
              <View style={MenuStyle.profileBgImgContainer}>
                <ImageBackground
                  resizeMode="stretch"
                  style={MenuStyle.profileImg}
                  source={require('../../assects/images/girlProfileImg.png')}>
                  <View>
                    <LinearGradient
                      style={MenuStyle.profileImgGradient}
                      colors={['#370BF0', '#F020D8']}>
                      <View style={MenuStyle.gradientLayerOnImg}></View>
                    </LinearGradient>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={MenuStyle.maryText}>MARY OLSON</Text>
            </TouchableOpacity>
          </View>
          <View style={MenuStyle.rightMryProfileContainer}>
            <View>
              <Image
                style={MenuStyle.settingIcon}
                source={require('../../assects/icons/settingIcon.png')}
              />
            </View>
            <View>
              <Image
                source={require('../../assects/icons/translationIcon.png')}
              />
            </View>
          </View>
        </View>
        <View style={IconTextWithBgStyle.bgIconComponentContainer}>
          {bgIconComponentArr.map(item => {
            return <IconTextWithBg item={item} />;
          })}
        </View>
        <View style={MenuStyle.borderSelf}></View>
        <View>
          <View style={MenuStyle.toolTextContainer}>
            <Text style={MenuStyle.toolText}>Tools</Text>
          </View>
        </View>
        <View style={MenuStyle.iconTextComponentContainer}>
          {iconComponentArr.map(item => {
            return <IconText item={item} />;
          })}
        </View>
        <View style={MenuStyle.borderSelf}></View>
        <View style={MenuStyle.marketsTextContainer}>
          <Text style={MenuStyle.marketsText}>Markets</Text>
        </View>

        <View style={MenuStyle.iconTextComponentContainer}>
          {iconComponentArr1.map(item => {
            return <IconText item={item} />;
          })}
        </View>

        {/* --- */}
      </View>
    </ScrollView>
  );
}
export default Menu;
