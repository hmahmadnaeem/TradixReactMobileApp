import React from 'react';
import {ScrollView, View, Text, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// -----
import MyPortfolioStyle from './MyPortfolioStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import ShareValue from './shareValue/ShareValue';
import {Color} from '../../theme/color/Color';
import Button from '../../commonComponents/button/Button';

function MyPortfolio({navigation}) {
  const stockVlauesArr = [
    {
      brandNameText: 'Apple',
      timeCalculation: '10:44:45',
      priceinUsd: '20.047,50 USD',
      priceInPercentage: '+203 (+1,04%)',
      arrowIcon: require('../../assects/icons/arrowUpWord.png'),
      coloredVlaue: '900',
      lowerValue: '100',
      // BgClr={Color.secondryClr}
    },
    {
      brandNameText: 'Apple',
      timeCalculation: '10:44:45',
      priceinUsd: '20.047,50 USD',
      priceInPercentage: '+203 (+1,04%)',
      arrowIcon: require('../../assects/icons/arrowUpWord.png'),
      coloredVlaue: '900',
      lowerValue: '100',
      // BgClr={Color.secondryClr}
    },
    {
      brandNameText: 'Apple',
      timeCalculation: '10:44:45',
      priceinUsd: '20.047,50 USD',
      priceInPercentage: '+203 (+1,04%)',
      arrowIcon: require('../../assects/icons/arrowUpWord.png'),
      coloredVlaue: '900',
      lowerValue: '100',
      // BgClr={Color.secondryClr}
    },
    {
      brandNameText: 'Apple',
      timeCalculation: '10:44:45',
      priceinUsd: '20.047,50 USD',
      priceInPercentage: '+203 (+1,04%)',
      arrowIcon: require('../../assects/icons/arrowDownWord.png'),
      coloredVlaue: '900',
      lowerValue: '100',
      BgClr: Color.secondryClr,
      holdingValueClr: Color.whiteClr,
    },
  ];
  return (
    <ScrollView style={MyPortfolioStyle.mainContainer}>
      <View style={MyPortfolioStyle.HeaderElementsContainer}>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
          // left 2
          // conditionSelectorLeftTwo
          leftTextTwo="PORTFOLIO 1"
          // right 1
          conditionSelectorRightOne
          iconImgRightOne={require('../../assects/icons/plusIcon.png')}
          // rightImgContOneBgClr="#000"
          // right 2
          conditionSelectorRightTwo
          iconImgRightTwo={require('../../assects/icons/verticalMenuIcon.png')}
        />
      </View>
      {/* ________ */}

      <View style={MyPortfolioStyle.myPortfolioTopBgContainer}>
        <ImageBackground
          resizeMode="stretch"
          style={MyPortfolioStyle.myPortfolioTopBgImg}
          source={require('../../assects/bgImages/myPortfolioTopBgGreen.png')}>
          <LinearGradient
            colors={['#370BF0', '#F020D8']}
            style={MyPortfolioStyle.profileImgGradient}>
            <View style={MyPortfolioStyle.leftSideContainer}>
              <Text style={MyPortfolioStyle.summaryText}>SUMMARY</Text>
              <Text style={MyPortfolioStyle.priceText}>15620 USD</Text>
            </View>
            <View style={MyPortfolioStyle.rightSideContainer}>
              <Text style={MyPortfolioStyle.timeTextRight}>24H</Text>
              <Text style={MyPortfolioStyle.priceTextRight}>+1200 USD</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={MyPortfolioStyle.SharePriceMainContainer}>
        <View style={MyPortfolioStyle.sharePriceHeading}>
          <View style={MyPortfolioStyle.portfolioHeadingContainer}>
            <Text style={MyPortfolioStyle.portfoioTextHeading}>Portfolio</Text>
            <Image
              style={MyPortfolioStyle.bulletedIcon}
              source={require('../../assects/icons/bulletedList.png')}
            />
          </View>
          <View style={MyPortfolioStyle.priceHeadingContainer}>
            <Text style={MyPortfolioStyle.priceTextHeading}>Price</Text>
            <Image
              style={MyPortfolioStyle.sortDown}
              source={require('../../assects/icons/sortDown.png')}
            />
          </View>
          <View style={MyPortfolioStyle.holdingHeadingContainer}>
            <Text style={MyPortfolioStyle.holdingTextHeading}>Holdings</Text>
            <Image
              style={MyPortfolioStyle.sortDown}
              source={require('../../assects/icons/sortDown.png')}
            />
          </View>
        </View>

        <View style={MyPortfolioStyle.shareValueContainer}></View>
        {stockVlauesArr.map(item => {
          return <ShareValue item={item} />;
        })}
        <View style={MyPortfolioStyle.tradingBtnContainer}>
          <Button
            press={() => navigation.navigate('Coin')}
            btnText="TRADING NOW"
            btnColor={Color.secondryClr}
          />
        </View>
      </View>
    </ScrollView>
  );
}
export default MyPortfolio;
