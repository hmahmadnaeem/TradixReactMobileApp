import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import IconTextWithBgStyle from './IconTextWithBgStyle';

function IconTextWithBg({item}) {
  return (
    <ScrollView style={IconTextWithBgStyle.mainContainer}>
      <View style={IconTextWithBgStyle.iconTextWithBgContainer}>
        <View style={IconTextWithBgStyle.bgIconContainer}>
          <Image style={IconTextWithBgStyle.IconStyle} source={item.bgIcon} />
        </View>
        <View style={IconTextWithBgStyle.bgIconTextContainer}>
          <Text style={IconTextWithBgStyle.bgIconText}>{item.bgIconText}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default IconTextWithBg;
