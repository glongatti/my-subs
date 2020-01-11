import React from 'react';

import Icon from '../icon';
import { BackButton } from './styles';

export default function BackHeader({ color, size, onBackPress }) {
  return (
    <BackButton onPress={onBackPress}>
      <Icon name="ARROW_LEFT" color={color} size={size} />
    </BackButton>
  );
}
