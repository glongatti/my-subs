import React from 'react';
import { Button } from 'react-native-elements';
import { DefaultButton, ButtonText } from './styles';
import colors from '../../utils/colors';

export default function ButtonDefault({
  text, type, styles, color, width, fontColor, onPress, isLoading
}) {
  switch (type) {
    case 'second':
      return (
        <Button
          title={text}
          buttonStyle={{
            ...styles,
            backgroundColor: color || colors.primaryGreen,
            width: width || 180,
            marginTop: 20,
          }}
          titleStyle={{
            color: fontColor || colors.primaryWhite,
          }}
          onPress={onPress}
          loading={isLoading}
        />
      );
    default:
      return (
        <DefaultButton onPress={onPress}>
          <ButtonText>{text}</ButtonText>
        </DefaultButton>
      );
  }
}
