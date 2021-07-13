import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
// import Modal from 'react-native-modal';

// -----
import AlertsStyle from './AlertsStyle';
import HeaderElements from '../../commonComponents/headerElements/HeaderElements';
import AlertsPriceCard from './alertsPriceCard/AlertsPriceCard';
import Button from '../../commonComponents/button/Button';
import {Color} from '../../theme/color/Color';
import CancelAlertsStyle from './cancelAlerts/CancelAlertsStyle';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// -----

function Alerts({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    //
    <ScrollView style={AlertsStyle.mainContainer}>
      <Image
        resizeMode="stretch"
        style={AlertsStyle.headerBg}
        source={require('../../assects/bgImages/alertsHeaderBg.png')}
      />
      <View style={AlertsStyle.headerElementsContianer}>
        <HeaderElements
          // left 1
          conditionSelectorLeftOne
          text="Go Back"
          iconImgLeftOne={require('../../assects/icons/backArrowIcon.png')}
          // left 2
          // conditionSelectorLeftTwo
          leftTextTwo="ALERTS"
          // right 1
          conditionSelectorRightOne
          iconImgRightOne={require('../../assects/icons/bellIcon.png')}
          rightImgContOneBgClr="#000"
          // right 2
          conditionSelectorRightTwo
          iconImgRightTwo={require('../../assects/icons/verticalMenuIcon.png')}
        />
      </View>
      {/* --- */}

      <View style={AlertsStyle.grayBgMainContainer}>
        <View style={AlertsStyle.lastHContainer}>
          <Text style={AlertsStyle.lastHText}>LAST 24 H</Text>
        </View>
        <View style={AlertsStyle.firstAlertCardContainer}>
          <AlertsPriceCard
            brandNameText="APPLE"
            currentDate="Sep 31"
            valueStatus="Above"
            shareRate="115,50 usd"
          />
        </View>
        {/* --- */}
        <View style={AlertsStyle.secondAlertCardContainer}>
          <AlertsPriceCard
            brandNameText="NEO"
            currentDate="Sep 31"
            valueStatus="Above"
            shareRate="22,50 usd"
          />
        </View>
        <View style={AlertsStyle.orderAlertsContainer}>
          <Text style={AlertsStyle.orderAlertsText}>OLDER ALERTS</Text>
        </View>

        <View style={AlertsStyle.thirdAlertCardContainer}>
          <AlertsPriceCard
            brandNameText="APPLE"
            currentDate="Sep 13"
            valueStatus="Above"
            shareRate="116,50 usd"
          />
        </View>
        <View style={AlertsStyle.fourthAlertCardContainer}>
          <AlertsPriceCard
            priceUpDownSelection
            brandNameText="TSLA"
            currentDate="Sep 11"
            valueStatus="Under"
            shareRate="417,00 usd"
          />
        </View>
        <View style={AlertsStyle.buySellBtnContainer}>
          <View style={AlertsStyle.createBorder}></View>
          <View style={AlertsStyle.tradingNowContainer}>
            <Text style={AlertsStyle.tradingNowText}>TRADING NOW</Text>
          </View>
          <View style={AlertsStyle.bothBtnContainer}>
            {/* --- */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={CancelAlertsStyle.cancelAlertsMainContainer}>
                  <TouchableOpacity>
                    <View style={CancelAlertsStyle.crossIconContainer}>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                          // ---

                          // ---
                          style={CancelAlertsStyle.crossIconStyle}
                          source={require('../../assects/icons/crossWithCircleIcon.png')}
                        />
                      </Pressable>
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
                          source={require('../../assects/icons/arrowUpWord.png')}
                        />
                      </View>
                      <Text style={CancelAlertsStyle.priceRateText}>
                        alsdfjlasf
                      </Text>
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
              </View>
            </Modal>
            {/* --- */}
            <View style={AlertsStyle.buyBtnContainer}>
              <Button
                press={() => setModalVisible(true)}
                btnText="BUY"
                selectColor
                backgroundColor={Color.primaryClr}
              />
            </View>
            <View style={AlertsStyle.sellBtnContainer}>
              <Button
                btnText="SELL"
                selectColor
                backgroundColor={Color.secondryClr}
              />
            </View>
          </View>
        </View>

        {/*  */}
      </View>

      {/* ---------- */}
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}

      {/* ---------- */}
    </ScrollView>
  );
}
export default Alerts;

// ---

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      backgroundColor: 'red',
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
