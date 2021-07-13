import React from 'react';
import {ScrollView, View, Text} from 'react-native';

// -----
import ShareHolderCardStyle from './ShareHolderCardStyle';
import {Color} from '../../../theme/color/Color';

function ShareHolderCard({item}) {
  return (
    <ScrollView style={ShareHolderCardStyle.mainContainer}>
      <View style={ShareHolderCardStyle.shareHolderCardMainContainer}>
        <View style={ShareHolderCardStyle.leftCard}>
          <View>
            <Text style={ShareHolderCardStyle.shareHolderName}>
              {item.shareHolderName}
            </Text>
          </View>
          <View>
            <Text style={ShareHolderCardStyle.sahreHolderTime}>
              {item.sahreHolderTime}
            </Text>
          </View>
        </View>
        <View style={ShareHolderCardStyle.rightCard}>
          <View style={ShareHolderCardStyle.shareValueTimeContainer}>
            <Text style={ShareHolderCardStyle.shareValueTime}>
              {item.shareValueTime}
            </Text>
          </View>
          <View>
            <Text style={ShareHolderCardStyle.shareValue}>
              {item.shareValue}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default ShareHolderCard;
