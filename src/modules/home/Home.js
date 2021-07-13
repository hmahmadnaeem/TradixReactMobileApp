import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import HomeStyle from './HomeStyle';
import ScrollableTextList from '../../commonComponents/scrollableTextList/ScrollableTextList';
import {Color} from '../../theme/color/Color';
import ShareHolderCard from './shareHolderCard/ShareHolderCard';
import Button from '../../commonComponents/button/Button';
// import

// -----
function Home({navigation}) {
  scrollTextArr = [
    {
      scrollableText: 'INDEX',
      textClr: Color.whiteClr,
      bgClr: Color.secondryClr,
    },
    {
      scrollableText: 'SHARES',
    },

    {
      scrollableText: 'CURRENCIES',
    },
    {
      scrollableText: 'FUTURES',
    },
    {
      scrollableText: 'CRYPTO',
    },
    {
      scrollableText: 'INDEX',
    },
  ];
  // ---
  const shareHolderCardArr = [
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
    {
      shareHolderName: 'DOWN JONES',
      sahreHolderTime: '10:44:45',
      shareValueTime: '20.047,50',
      shareValue: '+203 (+1,04%)',
    },
  ];
  return (
    <ScrollView style={HomeStyle.mainContainer}>
      <View style={HomeStyle.testBox}></View>
      <View style={HomeStyle.homeHeaderBgContainer}>
        <Image
          resizeMode="stretch"
          style={HomeStyle.homeHeaderBg}
          source={require('../../assects/bgImages/homeHeaderBg.png')}
        />
      </View>
      <View style={HomeStyle.headerElementMainContianer}>
        <View>
          <Image source={require('../../assects/images/logoImage.png')} />
        </View>
        <View>
          <Image source={require('../../assects/icons/searchIcon.png')} />
        </View>
      </View>
      <View style={HomeStyle.grayHeaderBgContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {scrollTextArr.map(item => {
            return <ScrollableTextList item={item} />;
          })}
        </ScrollView>
      </View>
      {/* --- */}
      {shareHolderCardArr.map(item => {
        return <ShareHolderCard item={item} />;
      })}
      <View style={HomeStyle.loadMoreBtnContainer}>
        <Button
          press={() => navigation.navigate('News')}
          btnText="Loead More"
          selectColor
          backgroundColor={Color.secondryClr}
        />
      </View>
      {/* --- */}
    </ScrollView>
  );
}
export default Home;
