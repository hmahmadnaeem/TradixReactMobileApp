import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

// -----
import NewsArticleStyle from './NewsArticleStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import ScrollableTextList from '../../commonComponents/scrollableTextList/ScrollableTextList';
import {Color} from '../../theme/color/Color';
// -----
function NewsArticle({navigation}) {
  const scrollerTextArr = [
    {
      scrollableText: 'EDITORIAL',
      bgClr: Color.primaryClr,
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
      scrollableText: 'SCROLL TEXT',
    },
  ];
  return (
    <ScrollView style={NewsArticleStyle.mainContainer}>
      <View style={NewsArticleStyle.newsArticleHeaderBgContainer}>
        <Image
          style={NewsArticleStyle.newsArticleHeaderBg}
          source={require('../../assects/bgImages/newsArticleHeaderBg.png')}
        />
      </View>
      <View style={NewsArticleStyle.headerElementsContianer}>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
          // left 2
          // conditionSelectorLeftTwo
          leftTextTwo="EDITORIAL NEWS"
          // right 1
          // conditionSelectorRightOne
          // iconImgRightOne={require('../assects/icons/bellIcon.png')}
          // rightImgContOneBgClr="#000"
          // right 2
          // conditionSelectorRightTwo
          // iconImgRightTwo={require('../assects/icons/verticalMenuIcon.png')}
        />
      </View>
      {/* --- */}
      <View style={NewsArticleStyle.grayMainContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={NewsArticleStyle.scrollerContainer}>
          {scrollerTextArr.map(item => {
            return <ScrollableTextList item={item} />;
          })}
        </ScrollView>
        <View style={NewsArticleStyle.mainBodyImgContainer}>
          <Image
            style={NewsArticleStyle.mainBodyImg}
            source={require('../../assects/images/newsArticleBodyImg.png')}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Exchange')}
          style={NewsArticleStyle.CRYPTOCURRENCYTextContainer}>
          <Text style={NewsArticleStyle.CRYPTOCURRENCYText}>
            CRYPTOCURRENCY
          </Text>
        </TouchableOpacity>
        <View style={NewsArticleStyle.calenderDateContainer}>
          <View calenderLeftContainer>
            <View>
              <Image source={require('../../assects/icons/calendarIcon.png')} />
            </View>
            <View>
              <Text style={NewsArticleStyle.dateText}>02 Set 2020</Text>
            </View>
          </View>
          <View calenderRightContainer>
            <View style={NewsArticleStyle.futureCryptoTextContainer}>
              <View style={NewsArticleStyle.futureTextContainer}>
                <Text style={NewsArticleStyle.futureText}>
                  What is the future of
                </Text>
              </View>
              <View>
                <Text style={NewsArticleStyle.cryptoText}>
                  cryptocurrencies?
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* --- */}
        <View>
          <Text style={NewsArticleStyle.longParagraphText}>
            Rem deserunt voluptatem sapiente. Quod sint officiis quae magnam.
            Qui eaque atque quia. Incidunt dolor reiciendis tenetur libero error
            consequatur voluptate recusandae. Sequi voluptatum quas. Ullam
            voluptatem reprehenderit ea commodi. Doloremque autem praesentium
            qui harum quia sunt voluptatem eius at. Voluptates voluptatem eaque
            et voluptas maxime molestiae et. Et saepe perferendis ut quidem et
            est. Et iusto ut nostrum delectus. Libero et modi placeat labore sit
            et quaerat sed. Dolorem libero earum ipsum illum nemo.
          </Text>
          <Text style={NewsArticleStyle.longParagraphText}>
            Rem deserunt voluptatem sapiente. Quod sint officiis quae magnam.
            Qui eaque atque quia. Incidunt dolor reiciendis tenetur libero error
            consequatur voluptate recusandae. Sequi voluptatum quas. Ullam
            voluptatem reprehenderit ea commodi. Doloremque autem praesentium
            qui harum quia sunt voluptatem eius at. Voluptates voluptatem eaque
            et voluptas maxime molestiae et. Et saepe perferendis ut quidem et
            est. Et iusto ut nostrum delectus. Libero et modi placeat labore sit
            et quaerat sed. Dolorem libero earum ipsum illum nemo.
          </Text>
        </View>

        {/* --- */}
      </View>
    </ScrollView>
  );
}
export default NewsArticle;
