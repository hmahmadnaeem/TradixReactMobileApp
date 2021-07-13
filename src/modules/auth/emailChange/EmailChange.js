import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

// -----
import EmailChangeStyle from './EmailChangeStyle';
import Logo from '../../../commonComponents/logo/Logo';
import Button from '../../../commonComponents/button/Button';

function EmailChange({navigation}) {
  return (
    <ScrollView style={EmailChangeStyle.mainContainer}>
      <View>
        <Logo />
        <View style={EmailChangeStyle.paperImgContainer}>
          <Image
            style={EmailChangeStyle.paperImg}
            source={require('../../../assects/images/emailChange/paperWithBg.png')}
          />
        </View>

        <View style={EmailChangeStyle.emailReceviedTextContainer}>
          <Text style={EmailChangeStyle.emailReceviedText}>
            We have sent you an email to change your password
          </Text>
        </View>
        <View style={EmailChangeStyle.resendEmailBtnContainer}>
          <Button
            press={() => navigation.navigate('ChangePassword')}
            btnText="RESEND EMAIL"
          />
        </View>
        <Text style={EmailChangeStyle.WaitingText}>
          Wait 30 seconds before sending it
        </Text>
      </View>
    </ScrollView>
  );
}
export default EmailChange;
