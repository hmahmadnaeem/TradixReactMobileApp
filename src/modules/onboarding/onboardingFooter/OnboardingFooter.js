import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import OnboardingFooterStyle from './OnboardingFooterStyle';
import Button from '../../../commonComponents/button/Button';

function OnboardingFooter(props) {
  //   const btnText = [{btnText: 'next' || 'default'}];
  return (
    <ScrollView style={OnboardingFooterStyle.mainContainer}>
      <View style={OnboardingFooterStyle.footerMainContainer}>
        <View style={OnboardingFooterStyle.sliderImageContainer}>
          <Image source={props.sliderImageContainer} />
        </View>
        <View style={OnboardingFooterStyle.footerBtnContainer}>
          <Button btnText={props.btnText} press={props.press} />
        </View>
      </View>
    </ScrollView>
  );
}
export default OnboardingFooter;
