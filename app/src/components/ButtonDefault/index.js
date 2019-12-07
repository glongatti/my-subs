import React from 'react';
import { Button } from 'react-native-elements';
// import { Container } from './styles';
import colors from '../../utils/colors';

export default function ButtonDefault({
  title, color, styles, onPress
}) {
  return (

    <Button
      title={title}
      buttonStyle={{
        ...styles,
        backgroundColor: color || colors.primaryGreen,
        width: 180,
        marginTop: 20
      }}
      onPress={onPress}
    />

  );
}
