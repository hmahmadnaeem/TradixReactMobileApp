import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

// -----
import OnboardingScreenOneStyle from './OnboardingScreenOneStyle';
import HeaderElements from '../../../commonComponents/headerElements/HeaderElements';
import OnboardingText from '../onboardingText/OnboardingText';
import OnboardingFooter from '../onboardingFooter/OnboardingFooter';

// -----
function OnboardingScreenOne({navigation}) {
  return (
    <ScrollView style={OnboardingScreenOneStyle.mainContainer}>
      <View style={OnboardingScreenOneStyle.onboadingHeaderContainer}>
        <HeaderElements
          // right 2
          //   conditionSelectorRightTwo
          //   iconImgRightTwo={require('../assects/icons/verticalMenuIcon.png')}
          rightTextTwo="Skip"
        />
      </View>

      <View style={OnboardingScreenOneStyle.centerBodyImagesContianer}>
        <Image
          resizeMode="stretch"
          style={OnboardingScreenOneStyle.centerBodyImage}
          source={require('../../../assects/bgImages/ObBgOne.png')}
        />
        <Image
          style={OnboardingScreenOneStyle.characterBodyImg}
          source={require('../../../assects/images/ObGirlCoin.png')}
        />
      </View>

      {/* --- */}
      <View style={OnboardingScreenOneStyle.textContainer}>
        <OnboardingText
          onboardingHeadingText="Start to invest for your future!"
          onboardingDescriptionText="Ex totam praesentium incidunt aut."
        />
      </View>
      <View style={OnboardingScreenOneStyle.footerContainer}>
        <OnboardingFooter
          press={() => navigation.navigate('OnboardingScreenTwo')}
          sliderImageContainer={require('../../../assects/icons/sliderOneIcon.png')}
          btnText="NEXT"
        />
      </View>
    </ScrollView>
  );
}
export default OnboardingScreenOne;
