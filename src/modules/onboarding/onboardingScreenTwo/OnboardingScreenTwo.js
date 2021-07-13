import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import OnboardingScreenTwoStyle from './OnboardingScreenTwoStyle';
import HeaderElements from '../../../commonComponents/headerElements/HeaderElements';
import OnboardingText from '../onboardingText/OnboardingText';
import OnboardingFooter from '../onboardingFooter/OnboardingFooter';
// -----

function OnboardingScreenTwo({navigation}) {
  return (
    <ScrollView style={OnboardingScreenTwoStyle.mainContainer}>
      <View style={OnboardingScreenTwoStyle.onboadingHeaderContainer}>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../../assects/icons/backArrowIcon.png')}
          // right 2
          //   conditionSelectorRightTwo
          //   iconImgRightTwo={require('../assects/icons/verticalMenuIcon.png')}
          rightTextTwo="Skip"
        />
      </View>
      {/* --- */}
      <View style={OnboardingScreenTwoStyle.textContainer}>
        <OnboardingText
          onboardingHeadingText="Follow our tipsto achieve success!"
          onboardingDescriptionText="Ex totam praesentium incidunt aut."
        />
      </View>
      {/* --- */}
      <View style={OnboardingScreenTwoStyle.centerBodyImagesContianer}>
        <Image
          resizeMode="stretch"
          style={OnboardingScreenTwoStyle.centerBodyImage}
          source={require('../../../assects/bgImages/ObBgTwo.png')}
        />
        <Image
          style={OnboardingScreenTwoStyle.characterBodyImg}
          source={require('../../../assects/images/ObManCoin.png')}
        />
      </View>

      {/* --- */}

      <View style={OnboardingScreenTwoStyle.footerContainer}>
        <OnboardingFooter
          press={() => navigation.navigate('OnboardingScreenThree')}
          sliderImageContainer={require('../../../assects/icons/sliderTwoIcon.png')}
          btnText="NEXT"
        />
      </View>
    </ScrollView>
  );
}
export default OnboardingScreenTwo;
