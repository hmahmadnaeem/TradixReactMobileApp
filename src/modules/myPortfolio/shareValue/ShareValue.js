import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import ShareValueStyle from './ShareValueStyle';
import {Color} from '../../../theme/color/Color';

function ShareValue({item}) {
  const BgClr = [{backgroundColor: item.BgClr || Color.primaryClr}];
  const holdingValueClr = {color: item.holdingValueClr || Color.blackClr};
  return (
    <ScrollView style={ShareValueStyle.mainContainer}>
      <View style={ShareValueStyle.stockValuMainContainer}>
        <View style={ShareValueStyle.brandNameContainer}>
          <Text style={ShareValueStyle.appleText}>{item.brandNameText}</Text>
          <Text style={ShareValueStyle.appleTimeText}>
            {item.timeCalculation}
          </Text>
        </View>
        <View style={ShareValueStyle.shareValueContainer}>
          <Text style={ShareValueStyle.priceInUsd}>{item.priceinUsd}</Text>
          <Text style={ShareValueStyle.priceInPercentage}>
            {item.priceInPercentage}
          </Text>
        </View>
        <View style={ShareValueStyle.numberOfShareContainer}>
          <View style={ShareValueStyle.upWordArrowContainer}>
            <Image
              style={ShareValueStyle.upWordArrow}
              source={item.arrowIcon}
            />
          </View>
          <View>
            <View style={[ShareValueStyle.coloredValueContainer, BgClr]}>
              <Text style={[ShareValueStyle.coloredValue, holdingValueClr]}>
                {item.coloredVlaue}
              </Text>
            </View>
            <Text style={ShareValueStyle.lowerValue}>{item.lowerValue}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default ShareValue;
