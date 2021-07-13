import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import MobileBrandCardStyle from './MobileBrandCardStyle';

function MobileBrandCard({item}) {
  return (
    <ScrollView style={MobileBrandCardStyle.mainContainer}>
      <View style={MobileBrandCardStyle.mobileBrandCardMainContainer}>
        <View style={MobileBrandCardStyle.mobileImgContainer}>
          <Image source={item.mobileImg} />
        </View>
        <View style={MobileBrandCardStyle.cardAllTextContainer}>
          <View style={MobileBrandCardStyle.priceDateContainer}>
            <View>
              <Text style={MobileBrandCardStyle.rateFluctuationText}>
                {item.rateFluctuationText}
              </Text>
            </View>
            <View>
              <Text style={MobileBrandCardStyle.currentDate}>
                {item.currentDate}
              </Text>
            </View>
          </View>
          <View style={MobileBrandCardStyle.brandNameContainer}>
            <Text style={MobileBrandCardStyle.brandName}>{item.brandName}</Text>
          </View>
          <View style={MobileBrandCardStyle.brandDescriptionContainer}>
            <Text style={MobileBrandCardStyle.brandDescription}>
              {item.brandDescription}
            </Text>
          </View>
        </View>

        <View style={MobileBrandCardStyle.curveArrowIconContainer}>
          <Image
            source={require('../../../assects/icons/curveArrowIcon.png')}
          />
        </View>
        {/* --- */}
      </View>
    </ScrollView>
  );
}
export default MobileBrandCard;
