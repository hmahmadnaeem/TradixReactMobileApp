import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import OnboardingScreenThreeStyle from './OnboardingScreenThreeStyle';
import HeaderElements from '../../../commonComponents/headerElements/HeaderElements';
import OnboardingText from '../onboardingText/OnboardingText';
import OnboardingFooter from '../onboardingFooter/OnboardingFooter';

// -----

function OnboardingScreenThree({navigation}) {
  return (
    <ScrollView style={OnboardingScreenThreeStyle.mainContainer}>
      <View style={OnboardingScreenThreeStyle.onboadingHeaderContainer}>
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
      <View style={OnboardingScreenThreeStyle.centerBodyImagesContianer}>
        <Image
          resizeMode="stretch"
          style={OnboardingScreenThreeStyle.centerBodyImage}
          source={require('../../../assects/bgImages/ObBgThree.png')}
        />
        <Image
          style={OnboardingScreenThreeStyle.characterBodyImg}
          source={require('../../../assects/images/ObGirlGraph.png')}
        />
      </View>
      {/* --- */}
      <View style={OnboardingScreenThreeStyle.textContainer}>
        <OnboardingText
          onboardingHeadingText="Keep your investment safe"
          onboardingDescriptionText="Ex totam praesentium incidunt aut."
        />
      </View>
      {/* --- */}
      <View style={OnboardingScreenThreeStyle.footerContainer}>
        <OnboardingFooter
          press={() => navigation.navigate('Signup')}
          sliderImageContainer={require('../../../assects/icons/sliderThreeIcon.png')}
          btnText="START"
        />
      </View>
    </ScrollView>
  );
}
export default OnboardingScreenThree;
