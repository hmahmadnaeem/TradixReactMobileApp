import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import AlertsPriceCardStyle from './AlertsPriceCardStyle';

function AlertsPriceCard(props) {
  return (
    <ScrollView style={AlertsPriceCardStyle.mainContainer}>
      <View style={AlertsPriceCardStyle.alertsPriceCardMainContainer}>
        <View style={AlertsPriceCardStyle.leftSideValue}>
          <View style={AlertsPriceCardStyle.brandNameContainer}>
            <Text style={AlertsPriceCardStyle.brandNameText}>
              {props.brandNameText}
            </Text>
            <Text style={AlertsPriceCardStyle.currentDate}>
              {props.currentDate}
            </Text>
          </View>
        </View>
        <View style={AlertsPriceCardStyle.rightSideValue}>
          <View style={AlertsPriceCardStyle.valueStatusContainer}>
            <Text style={AlertsPriceCardStyle.valueStatus}>
              {props.valueStatus}
            </Text>
          </View>
          <View style={AlertsPriceCardStyle.statusArrowContainer}>
            {props.priceUpDownSelection ? (
              <Image
                style={AlertsPriceCardStyle.statusArrowIcon}
                source={require('../../../assects/icons/arrowDownWord.png')}
              />
            ) : (
              <Image
                style={AlertsPriceCardStyle.statusArrowIcon}
                source={require('../../../assects/icons/arrowUpWord.png')}
              />
            )}

            {/*  */}
            {/* <Image
              style={AlertsPriceCardStyle.statusArrowIcon}
              source={require('../../../assects/icons/arrowUpWord.png')}
            /> */}
          </View>
          <View style={AlertsPriceCardStyle.shareRateContainer}>
            <Text style={AlertsPriceCardStyle.shareRate}>
              {props.shareRate}
            </Text>
          </View>
          <Image
            style={AlertsPriceCardStyle.crossWithCircleIcon}
            source={require('../../../assects/icons/crossWithCircleIcon.png')}
          />
        </View>
        {/* <View style={AlertsPriceCardStyle.leftSideValue}>
          <Text style={AlertsPriceCardStyle.brandNameText}>Apple</Text>
          <Text style={AlertsPriceCardStyle.currentDate}>31 Sep</Text>
        </View>
      </View>
      <View style={AlertsPriceCardStyle.rightSideValue}>
      <View style={AlertsPriceCardStyle.brandNameContainer}>
        <View style={AlertsPriceCardStyle.valueStatusContainer}>
          <Text style={AlertsPriceCardStyle.valueStatus}>Above</Text>
        </View>
        <View style={AlertsPriceCardStyle.statusArrowContainer}>
          <Image
            style={AlertsPriceCardStyle.statusArrowIcon}
            source={require('../../../assects/icons/arrowUpWord.png')}
          />
        </View>
        <View style={AlertsPriceCardStyle.shareRateContainer}>
          <Text style={AlertsPriceCardStyle.shareRate}>115,50 usd</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}
export default AlertsPriceCard;
