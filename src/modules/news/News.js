import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// -----
import NewsStyle from './NewsStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import ScrollableTextList from '../../commonComponents/scrollableTextList/ScrollableTextList';
import {Color} from '../../theme/color/Color';
import MobileBrandCard from './mobileBrandCard/MobileBrandCard';

// -----
function News({navigation}) {
  scrollTextArr = [
    {
      bgClr: Color.primaryClr,
      scrollableText: 'EDITORIAL',
    },
    {
      scrollableText: 'CRYPTO NEWS',
    },
    {
      scrollableText: 'RAW MATERIAL',
    },
    {
      scrollableText: 'ECONOMICS',
    },
    {
      scrollableText: 'Scrolling Text',
    },
    {
      scrollableText: 'Scrolling Text',
    },
  ];
  // ----
  const brandCardArr = [
    {
      mobileImg: require('../../assects/images/ATLANTIAMobileImg.png'),
      rateFluctuationText: 'ALT -3,87%',
      currentDate: '3 Sept 2020',
      brandName: 'ATLANTIA',
      brandDescription:
        'Illum velit nam voluptatum enim aut ratione ratione officiis totam. Mollitia eum sint tempora ducimus ',
    },
    {
      mobileImg: require('../../assects/images/ATLANTIAMobileImg.png'),
      rateFluctuationText: 'ALT -3,87%',
      currentDate: '3 Sept 2020',
      brandName: 'ATLANTIA',
      brandDescription:
        'Illum velit nam voluptatum enim aut ratione ratione officiis totam. Mollitia eum sint tempora ducimus ',
    },
    {
      mobileImg: require('../../assects/images/ATLANTIAMobileImg.png'),
      rateFluctuationText: 'ALT -3,87%',
      currentDate: '3 Sept 2020',
      brandName: 'ATLANTIA',
      brandDescription:
        'Illum velit nam voluptatum enim aut ratione ratione officiis totam. Mollitia eum sint tempora ducimus ',
    },
  ];
  return (
    <ScrollView style={NewsStyle.mainContainer}>
      <View style={NewsStyle.headerBgContainer}>
        <Image
          resizeMode="stretch"
          style={NewsStyle.headerBg}
          source={require('../../assects/bgImages/newsHeaderBg.png')}
        />
      </View>
      {/* --- */}
      <View style={NewsStyle.headerElementContainer}></View>
      <HeaderElements
        // left 1
        conditionSelectorLeftOne
        text="Go Back"
        iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
        // left 2

        leftTextTwo="NEWS"
        // right 1

        // right 2
        conditionSelectorRightTwo
        iconImgRightTwo={require('../../assects/icons/verticalMenuIcon.png')}
      />
      {/* --- */}
      <View style={NewsStyle.mainGrayBgContianer}>
        <ScrollView
          style={NewsStyle.scrollTextComponentContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {scrollTextArr.map(item => {
            return <ScrollableTextList item={item} />;
          })}
        </ScrollView>
        <View style={NewsStyle.subHeaderMainContainer}>
          <Image
            style={NewsStyle.subHeardeBgImg}
            source={require('../../assects/bgImages/newsBodyFullBg.png')}
          />
        </View>
        {/* <Text>ladsfj</Text> */}
        <View style={NewsStyle.mobileBrandCardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsArticle')}
            style={NewsStyle.alertIconContainer}>
            <Image
              style={NewsStyle.alertIcon}
              source={require('../../assects/icons/alertIcon.png')}
            />
          </TouchableOpacity>
          {/* ------- */}
          <View style={NewsStyle.mobileBrandCardSubContainer}>
            {brandCardArr.map(item => {
              return <MobileBrandCard item={item} />;
            })}
          </View>
        </View>

        {/* --- */}
      </View>
    </ScrollView>
  );
}
export default News;
