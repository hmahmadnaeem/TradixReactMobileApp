import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import LoginStyle from './LoginStyle';
import Logo from '../../../commonComponents/logo/Logo';
import InputField from '../../../commonComponents/inputField/InputField';
import Button from '../../../commonComponents/button/Button';

function Login(props) {
  return (
    <ScrollView style={LoginStyle.mainContainer}>
      <View>
        <View style={LoginStyle.coinBookImgContainer}>
          <Image
            style={LoginStyle.coinBookImgStyle}
            source={require('../../../assects/images/login/coinBookImg.png')}
          />
        </View>
        <View style={LoginStyle.logoImgContainer}>
          <Logo />
        </View>
      </View>

      <View style={LoginStyle.inputFiledMainContainer}>
        <Text style={LoginStyle.welcomeText}>Create a free account</Text>
        <View style={LoginStyle.loginEmailInputCoontainer}>
          <InputField placeholderText="E-mail" />
        </View>
        <View style={LoginStyle.loginPasswordInputCoontainer}>
          <InputField secureTextEntry={true} placeholderText="Password" />
        </View>
        <View style={LoginStyle.loginButtonCoontainer}>
          <Button btnText="LOGIN" />
        </View>
        <View style={LoginStyle.logingBtnBelowTextContainer}>
          <Text style={LoginStyle.LoginBtnLeftText}>
            {props.LoginBtnLeftText}?
          </Text>
          <Text style={LoginStyle.LoginBtnRightText}>
            {props.LoginBtnRightText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default Login;
