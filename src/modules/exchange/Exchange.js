import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// -----
import ExchangeStyle from './ExchangeStyle';
import {Color} from '../../theme/color/Color';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import ExchangeRateCard from './exchangeRateCard/ExchangeRateCard';
import CurrentRateCard from './currentRateCard/CurrentRateCard';

function Exchange({navigation}) {
  return (
    <ScrollView style={ExchangeStyle.mainContainer}>
      <View>
        <Image
          style={ExchangeStyle.headImg}
          source={require('../../assects/bgImages/exchangeBgHeader.png')}
        />
        <View style={ExchangeStyle.HeaderElementsContainer}>
          <HeaderElements
            // left 1
            conditionSelectorLeftOne
            text="Go Back"
            iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
            // left 2
            // conditionSelectorLeftTwo
            leftTextTwo="CURRENCY EXCHANGE"
          />
        </View>
      </View>
      {/* --- */}
      <View style={ExchangeStyle.grayBgContianer}>
        <View style={ExchangeStyle.exchangeRateHeaderContainer}>
          <View style={ExchangeStyle.exhangeRateTextContianer}>
            <Text style={ExchangeStyle.exhangeRateText}>EXCHANGE RATE</Text>
          </View>
          <View style={ExchangeStyle.exhangeRateIconsContainer}>
            <View style={ExchangeStyle.settingIxconContainer}>
              <Image source={require('../../assects/icons/settingIcon.png')} />
            </View>
            <View>
              <Image
                source={require('../../assects/icons/verticalMenuIcon.png')}
              />
            </View>
          </View>
        </View>
        {/*  */}
        <Image
          style={ExchangeStyle.exchangeBodyBg}
          source={require('../../assects/bgImages/exchangeBodyBg.png')}
        />
        <View style={ExchangeStyle.exchangeRateEurContainer}>
          <ExchangeRateCard
            currencyText="EUR"
            currencyRateText="2300 EUR"
            priceConversionText="1 EUR = 1.1645 USD"
          />
        </View>
        <View style={ExchangeStyle.syncronizeIconContainer}>
          <Image source={require('../../assects/icons/synchronizeIcon.png')} />
        </View>

        <View style={ExchangeStyle.exchangeRateUsdContainer}>
          <ExchangeRateCard
            currencyText="USD"
            currencyRateText="2678,48 EUR"
            priceConversionText="1 EUR = 1.1645 USD"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Alerts')}
          style={ExchangeStyle.fovrouriteTextContainer}>
          <Text style={ExchangeStyle.favrotieText}>FAVORITES</Text>
        </TouchableOpacity>
        {/*  */}
        <View style={ExchangeStyle.currentRateCardContinaer}>
          <CurrentRateCard
            // iconSelectCondition
            currencyNameText="CHF"
            priceConverterText="1 CHF = 1.0887 USD"
          />
          <CurrentRateCard
            iconSelectCondition
            currencyNameText="CHF"
            rateArrowIcon={require('../../assects/icons/arrowUpWord.png')}
            priceConverterText="1 CHF = 1.0887 USD"
          />
        </View>
        <View style={ExchangeStyle.currentRateCardSecondContinaer}>
          <CurrentRateCard
            // iconSelectCondition
            currencyNameText="CHF"
            priceConverterText="1 CHF = 1.0887 USD"
          />
          <CurrentRateCard
            iconSelectCondition
            currencyNameText="CHF"
            rateArrowIcon={require('../../assects/icons/arrowUpWord.png')}
            priceConverterText="1 CHF = 1.0887 USD"
          />
        </View>

        {/*  */}
      </View>
    </ScrollView>
  );
}
export default Exchange;
