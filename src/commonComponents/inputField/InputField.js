import React from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';

// -----
import InputFieldStyle from './InputFieldStyle';

function InputField(props) {
  return (
    <View style={InputFieldStyle.mainContainer}>
      <TextInput
        placeholder={props.placeholderText}
        placeholderTextColor="#9D9D9D"
        secureTextEntry={props.secureTextEntry}
        style={InputFieldStyle.inputFiled}>
        {props.inputFiledText}
      </TextInput>
    </View>
  );
}
export default InputField;
