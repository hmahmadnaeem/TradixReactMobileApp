import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
// -----
import LogoStyle from './LogoStyle';

function Logo() {
  return (
    <View style={LogoStyle.mainContainer}>
      <View style={LogoStyle.bgImgContainer}>
        <ImageBackground
          resizeMode="stretch"
          style={LogoStyle.logoBackgroundImg}
          source={require('../../assects/bgImages/logoBg.png')}>
          <Image
            style={LogoStyle.logoImg}
            // style={LogoStyle.logoImg}
            source={require('../../assects/images/logoImg.png')}
          />
        </ImageBackground>
      </View>
    </View>
  );
}
export default Logo;
