import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import HeaderElementsStyle from './HeaderElementsStyle';

function HeaderElements(props) {
  return (
    <ScrollView style={HeaderElementsStyle.mainContainer}>
      <View style={HeaderElementsStyle.headerContainer}>
        <View style={HeaderElementsStyle.leftMainContainer}>
          <View style={HeaderElementsStyle.leftMainContainerOne}>
            {props.conditionSelectorLeftOne ? (
              <Image source={props.iconImgLeftOne} />
            ) : (
              <Text>{props.leftTextOne}</Text>
            )}
          </View>
          <View style={HeaderElementsStyle.leftMainContainerTwo}>
            {props.conditionSelectorLeftTwo ? (
              <Image source={props.iconImgLeftTwo} />
            ) : (
              <Text style={HeaderElementsStyle.leftTextTwo}>
                {props.leftTextTwo}
              </Text>
            )}
          </View>
          {/*  */}
          {/* {props.conditionSelectorLeftOne ? (
            <Image source={props.iconImg} />
          ) : (
            <Text>{props.text}</Text>
          )} */}
        </View>
        <View style={HeaderElementsStyle.rightMainContainer}>
          <View
            style={[
              HeaderElementsStyle.rightMainContainerOne,
              {backgroundColor: props.rightImgContOneBgClr},
            ]}>
            {props.conditionSelectorRightOne ? (
              <Image
                style={[
                  HeaderElementsStyle.rightImgContOne,
                  {backgroundColor: props.BgClrIcon},
                ]}
                source={props.iconImgRightOne}
              />
            ) : (
              <Text>{props.rightTextOne}</Text>
            )}
          </View>
          <View style={HeaderElementsStyle.rightMainContainerTwo}>
            {props.conditionSelectorRightTwo ? (
              <Image source={props.iconImgRightTwo} />
            ) : (
              <Text>{props.rightTextTwo}</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default HeaderElements;
