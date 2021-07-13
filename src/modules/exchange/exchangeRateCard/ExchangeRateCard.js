import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import ExchangeRateCardStyle from './ExchangeRateCardStyle';

function ExchangeRateCard(props) {
  return (
    <ScrollView style={ExchangeRateCardStyle.mainContainer}>
      <View style={ExchangeRateCardStyle.rateCardContainer}>
        <View style={ExchangeRateCardStyle.rateCardHeadingContainer}>
          <Text style={ExchangeRateCardStyle.currencyText}>
            {props.currencyText}
          </Text>
          <Image source={require('../../../assects/icons/sortDownBold.png')} />
        </View>
        {/*  */}
        <View style={ExchangeRateCardStyle.currencyRateContainer}>
          <Text style={ExchangeRateCardStyle.currencyRateText}>
            {props.currencyRateText}
          </Text>
        </View>
        <View>
          <Text style={ExchangeRateCardStyle.priceConversionText}>
            {props.priceConversionText}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default ExchangeRateCard;
