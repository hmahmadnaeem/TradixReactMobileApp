import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import OnboardingFooterStyle from '../onboardingFooter/OnboardingFooterStyle';

// -----
import OnboardingTextStyle from './OnboardingTextStyle';

function OnboardingText(props) {
  return (
    <ScrollView style={OnboardingTextStyle.mainContainer}>
      <View style={OnboardingTextStyle.onboardingTextMainContainer}>
        <View style={OnboardingTextStyle.onboardingHeadingTextContainer}>
          <Text style={OnboardingTextStyle.onboardingHeadingText}>
            {props.onboardingHeadingText}
          </Text>
        </View>
        <View style={OnboardingTextStyle.onboardingDescriptionTextContainer}>
          <Text style={OnboardingTextStyle.onboardingDescriptionText}>
            {props.onboardingDescriptionText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default OnboardingText;
