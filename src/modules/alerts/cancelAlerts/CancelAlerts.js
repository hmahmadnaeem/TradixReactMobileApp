import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

// -----
import CancelAlertsStyle from './CancelAlertsStyle';
// import AlertsPriceCard from '../alertsPriceCard/AlertsPriceCard';
import Button from '../../../commonComponents/button/Button';

function CancelAlerts() {
  return (
    <ScrollView style={CancelAlertsStyle.mainContainer}>
      <View style={CancelAlertsStyle.cancelAlertsMainContainer}>
        <TouchableOpacity>
          <View style={CancelAlertsStyle.crossIconContainer}>
            <Image
              style={CancelAlertsStyle.crossIconStyle}
              source={require('../../../assects/icons/crossWithCircleIcon.png')}
            />
          </View>
        </TouchableOpacity>
        <View style={CancelAlertsStyle.cancelAlertsTextContainer}>
          <Text style={CancelAlertsStyle.cancelAlertsText}>
            Are you sure you want to remove this alert?
          </Text>
        </View>
        <View style={CancelAlertsStyle.callingAlertCard}>
          <View>
            <Text style={CancelAlertsStyle.appleText}>APPLE</Text>
          </View>
          <View style={CancelAlertsStyle.rightSideContainer}>
            <View style={CancelAlertsStyle.aboveTextContainer}></View>
            <Text style={CancelAlertsStyle.aboveText}>Above</Text>
            <View style={CancelAlertsStyle.arrowIconContainer}>
              <Image
                source={require('../../../assects/icons/arrowUpWord.png')}
              />
            </View>
            <Text style={CancelAlertsStyle.priceRateText}>alsdfjlasf</Text>
          </View>
        </View>
        <View style={CancelAlertsStyle.bothBtnContainer}>
          <View style={CancelAlertsStyle.yesBtnContainer}>
            <Button btnText="YES, REMOVE IT" />
          </View>
          <View style={CancelAlertsStyle.noBtnContainer}>
            <Button btnText="NO, PLEASE" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default CancelAlerts;
