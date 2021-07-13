import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import SignupStyle from './SignupStyle';
import Logo from '../../../commonComponents/logo/Logo';
import InputField from '../../../commonComponents/inputField/InputField';
import Button from '../../../commonComponents/button/Button';

function Signup({navigation}, props) {
  return (
    <ScrollView style={SignupStyle.mainContainer}>
      <View>
        <View style={SignupStyle.coinBookImgContainer}>
          <Image
            style={SignupStyle.coinBookImgStyle}
            source={require('../../../assects/images/login/coinBookImg.png')}
          />
        </View>
        <View style={SignupStyle.logoImgContainer}>
          <Logo />
        </View>
      </View>

      <View style={SignupStyle.inputFiledMainContainer}>
        <Text style={SignupStyle.welcomeText}>Welcome!</Text>
        <View style={SignupStyle.signupEmailInputCoontainer}>
          <InputField placeholderText="E-mail" />
        </View>
        <View style={SignupStyle.signupPasswordInputCoontainer}>
          <InputField secureTextEntry={true} placeholderText="Password" />
        </View>
        <View style={SignupStyle.signupButtonCoontainer}>
          <Button
            press={() => navigation.navigate('EmailChange')}
            btnText="SIGN UP"
          />
        </View>
        <View style={SignupStyle.signupBtnBelowTextContainer}>
          <Text style={SignupStyle.signupBtnLeftText}>
            {props.signupBtnLeftText}?
          </Text>
          <Text style={SignupStyle.signupBtnRightText}>
            {props.signupBtnRightText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default Signup;
