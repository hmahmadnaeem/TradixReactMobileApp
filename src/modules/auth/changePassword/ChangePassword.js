import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

// -----
import ChangePasswordStyle from './ChangePasswordStyle';
// import Butt
import Button from '../../../commonComponents/button/Button';

function ChangePassword({navigation}) {
  return (
    <ScrollView style={ChangePasswordStyle.mainContainer}>
      <View style={ChangePasswordStyle.headerImgContainer}>
        <Image
          source={require('../../../assects/images/confirmChangePassword/topRightCorner.png')}
        />
      </View>
      <View style={ChangePasswordStyle.logoImgContainer}>
        <Image
          source={require('../../../assects/images/confirmChangePassword/logoImg.png')}
        />
      </View>
      <View style={ChangePasswordStyle.passwordChangedTextContainer}>
        <Text style={ChangePasswordStyle.passwordChangedText}>
          Yay! Your password has been changed!
        </Text>
      </View>
      <View style={ChangePasswordStyle.newPasswordTextContainer}>
        <Text style={ChangePasswordStyle.newPasswordText}>
          You can now log into your accountwith the new password
        </Text>
      </View>
      <View style={ChangePasswordStyle.changePasswordMainImgContainer}>
        <ImageBackground
          resizeMode="stretch"
          style={ChangePasswordStyle.mainBgImg}
          source={require('../../../assects/images/confirmChangePassword/mainBackgroundImg.png')}>
          <Image
            style={ChangePasswordStyle.girlImg}
            source={require('../../../assects/images/confirmChangePassword/girl.png')}
          />
        </ImageBackground>
      </View>
      <View style={ChangePasswordStyle.loginBtnContainer}>
        <Button
          press={() => navigation.navigate('MyPortfolio')}
          btnText="LOGIN"
        />
      </View>
    </ScrollView>
  );
}
export default ChangePassword;
