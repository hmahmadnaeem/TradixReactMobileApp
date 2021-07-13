import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Color} from '../../theme/color/Color';

// -----
import ScrollableTextListStyle from './ScrollableTextListStyle';

function ScrollableTextList({item}) {
  const bgClr = [{backgroundColor: item.bgClr || null}];
  const textClr = [{color: item.textClr || Color.blackClr}];
  return (
    <ScrollView style={ScrollableTextListStyle.mainContainer}>
      <TouchableOpacity>
        <View style={[ScrollableTextListStyle.scrollableTextContainer, bgClr]}>
          <Text style={[ScrollableTextListStyle.scrollableText, textClr]}>
            {item.scrollableText}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default ScrollableTextList;
