import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import CurrentRateCardStyle from './CurrentRateCardStyle';

function CurrentRateCard(props) {
  return (
    <ScrollView style={CurrentRateCardStyle.mainContainer}>
      <View style={CurrentRateCardStyle.currentRateCardContainer}>
        <View style={CurrentRateCardStyle.currencyTextContainer}>
          <Text style={CurrentRateCardStyle.currencyNameText}>
            {props.currencyNameText}
          </Text>
          {props.iconSelectCondition ? (
            <Image source={props.iconImgLeftTwo} />
          ) : (
            <Image
              source={require('../../../assects/icons/pinkArrowUpIcon.png')}
            />
            //   {props.leftTextTwo}
            // </Text>
          )}
          {/*  */}
          <Image
            style={CurrentRateCardStyle.currentRateArrowIcon}
            source={props.rateArrowIcon}
          />
        </View>
        <View style={CurrentRateCardStyle.priceConverterTextContainer}>
          <Text style={CurrentRateCardStyle.priceConverterText}>
            {props.priceConverterText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default CurrentRateCard;
