import React from 'react';
import {ScrollView, View, Text, Image, Alert} from 'react-native';
// =============== Librarites for Navigation  ===============
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// ===============  ===============
import NavigationStyle from './NavigationStyle';
import Home from '../modules/home/Home';
// -----
import Login from '../modules/auth/login/Login';
import Signup from '../modules/auth/signup/Signup';
import EmailChange from '../modules/auth/emailChange/EmailChange';
import ChangePassword from '../modules/auth/changePassword/ChangePassword';
import MyPortfolio from '../modules/myPortfolio/MyPortfolio';
import Menu from '../modules/menu/Menu';
import Exchange from '../modules/exchange/Exchange';
import Alerts from '../modules/alerts/Alerts';
import CancelAlerts from '../modules/alerts/cancelAlerts/CancelAlerts';
import News from '../modules/news/News';
import NewsArticle from '../modules/newsArticle/NewsArticle';
import OnboardingScreenOne from '../modules/onboarding/onboardingScreenOne/OnboardingScreenOne';
import OnboardingScreenTwo from '../modules/onboarding/onboardingScreenTwo/OnboardingScreenTwo';
import OnboardingScreenThree from '../modules/onboarding/onboardingScreenThree/OnboardingScreenThree';
import Coin from '../modules/coin/Coin';
// -----
import Logo from '../commonComponents/logo/Logo';
import Button from '../commonComponents/button/Button';
import InputField from '../commonComponents/inputField/InputField';
import HeaderElements from '../commonComponents/headerElements/HeaderElements';
import ShareValue from '../modules/myPortfolio/shareValue/ShareValue';
import IconTextWithBg from '../modules/menu/iconTextWithBg/IconTextWithBg';
import IconText from '../modules/menu/iconText/IconText';
import ExchangeRateCard from '../modules/exchange/exchangeRateCard/ExchangeRateCard';
import CurrentRateCard from '../modules/exchange/currentRateCard/CurrentRateCard';
import AlertsPriceCard from '../modules/alerts/alertsPriceCard/AlertsPriceCard';
import ScrollableTextList from '../commonComponents/scrollableTextList/ScrollableTextList';
import ShareHolderCard from '../modules/home/shareHolderCard/ShareHolderCard';
import MobileBrandCard from '../modules/news/mobileBrandCard/MobileBrandCard';
import OnboardingFooter from '../modules/onboarding/onboardingFooter/OnboardingFooter';
import OnboardingText from '../modules/onboarding/onboardingText/OnboardingText';
// =============== Navigation Object Calling ===============
const Stack = createStackNavigator();
// -----
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="OnboardingScreenOne"
          component={OnboardingScreenOne}
        />
        <Stack.Screen
          name="OnboardingScreenTwo"
          component={OnboardingScreenTwo}
        />
        <Stack.Screen
          name="OnboardingScreenThree"
          component={OnboardingScreenThree}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EmailChange" component={EmailChange} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="MyPortfolio" component={MyPortfolio} />
        <Stack.Screen name="Coin" component={Coin} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="NewsArticle" component={NewsArticle} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="Alerts" component={Alerts} />
        {/* <Stack.Screen name="CancelAlerts" component={CancelAlerts} />

        {/* ----- */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;

{
  /* ----- */
}
{
  /* <Login LoginBtnLeftText="Forgot Password?" LoginBtnRightText="Sig n Up" /> */
}
{
  /* <Signup signupBtnLeftText="Forgot Password?" signupBtnRightText="Login" /> */
}
{
  /* <EmailChange /> */
}
{
  /* <ChangePassword /> */
}
{
  /* <MyPortfolio /> */
}
{
  /* <Menu /> */
}
{
  /* <Exchange /> */
}
{
  /* <Alerts /> */
}
{
  /* <CancelAlerts /> */
}
{
  /* <Home /> */
}
{
  /* <News /> */
}
{
  /* <NewsArticle /> */
}
{
  /* <OnboardingScreenOne /> */
}
{
  /* <OnboardingScreenTwo /> */
}
{
  /* <OnboardingScreenThree /> */
}
{
  /* <Coin /> */
}
{
  /* ----- */
}
{
  /* <Logo /> */
}
{
  /* <Button /> */
}
{
  /* <InputField /> */
}
{
  /* ___________________________ */
}
{
  /* <HeaderElements
        // left 1
        conditionSelectorLeftOne
        text="Go Back"
        iconImgLeftOne={require('../assects/icons/backArrowIcon.png')}
        // left 2
        // conditionSelectorLeftTwo
        leftTextTwo="NEO INDEX"
        // right 1
        conditionSelectorRightOne
        iconImgRightOne={require('../assects/icons/bellIcon.png')}
        rightImgContOneBgClr="#000"
        // right 2
        conditionSelectorRightTwo
        iconImgRightTwo={require('../assects/icons/verticalMenuIcon.png')}
      /> */
}
{
  /* <ShareValue /> */
}
{
  /* <IconTextWithBg /> */
}
{
  /* <IconText /> */
}
{
  /* <ExchangeRateCard /> */
}
{
  /* <CurrentRateCard /> */
}
{
  /* <AlertsPriceCard /> */
}
{
  /* <ScrollableTextList /> */
}
{
  /* <ShareHolderCard /> */
}
{
  /* <MobileBrandCard /> */
}
{
  /* <OnboardingFooter /> */
}
{
  /* <OnboardingText /> */
}
{
  /* ___________________________ */
}
//
// </View>
