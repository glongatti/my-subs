import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DefaultButton, ButtonText } from './styles';

export default function ButtonDefault({
  text, color, onPress, isLoading
}) {
  return (
    <DefaultButton onPress={onPress} color={color}>
      {isLoading ? (<ActivityIndicator />) : (<ButtonText color={color}>{text}</ButtonText>)}
    </DefaultButton>
  );
}
