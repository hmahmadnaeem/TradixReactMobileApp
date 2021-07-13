import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import IconTextStyle from './IconTextStyle';

function IconText({item}) {
  return (
    <ScrollView style={IconTextStyle.mainContainer}>
      <View style={IconTextStyle.iconTextMainContainer}>
        <View style={IconTextStyle.iconContianer}>
          <Image source={item.icons} />
        </View>
        <View style={IconTextStyle.iconTextContainer}>
          <Text style={IconTextStyle.iconText}>{item.iconText}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default IconText;
