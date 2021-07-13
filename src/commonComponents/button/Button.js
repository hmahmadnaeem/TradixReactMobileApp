import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../theme/color/Color';

// -----
import ButtonStyle from './ButtonStyle';

function Button(props) {
  return (
    <View style={ButtonStyle.mainContainer}>
      <TouchableOpacity onPress={props.press}>
        {props.selectColor ? (
          <View
            style={[
              ButtonStyle.btnContainer,
              {
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : null,
              },
            ]}>
            <Text style={ButtonStyle.btnText}>{props.btnText}</Text>
          </View>
        ) : (
          <LinearGradient
            colors={['#370BF0', '#F020D8']}
            style={ButtonStyle.btnContainer}>
            <Text style={ButtonStyle.btnText}>{props.btnText}</Text>
          </LinearGradient>
        )}

        {/*  */}

        {/* {props.colorSelectionCondition ? (
          <LinearGradient
            // colors={btnColor}
            colors={['red']}
            style={ButtonStyle.btnContainer}>
            <Text style={ButtonStyle.btnText}>{props.btnText}</Text>
          </LinearGradient>
        ) : (
          <LinearGradient
            // colors={btnColor}
            colors={['#370BF0', '#F020D8']}
            style={ButtonStyle.btnContainer}>
            <Text style={ButtonStyle.btnText}>{props.btnText}</Text>
          </LinearGradient>
        )} */}
      </TouchableOpacity>
    </View>
  );
}
export default Button;

// requireNativeComponent: "VvlinearGradient" was not foundin th uimManager.
