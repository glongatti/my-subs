/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FA5Icon, FAIcon, MAIcon, MACIcon, AIcon, IOIcon,
  CircleView
} from './styles';

export default function Icon({
  name, size, color, position, top, left
}) {
  const props = {
    size,
    color,
    position,
    top,
    left
  };
  switch (name) {
    case 'CREATE':
      return <IOIcon name="ios-checkmark" {...props} />;
    case 'ADD_BUTTON':
      return <CircleView><IOIcon name="ios-add" {...props} /></CircleView>;
    case 'CREDIT_CARD':
      return <MAIcon name="credit-card" {...props} />;
    case 'CALENDAR':
      return <FAIcon name="calendar" {...props} />;
    case 'RETWEET':
      return <FAIcon name="retweet" {...props} />;
    case 'LIST':
      return <IOIcon name="md-menu" {...props} />;
    case 'MONEY':
      return <FA5Icon name="money-bill-wave" {...props} />;
    case 'COINS':
      return <MACIcon name="coins" {...props} />;
    case 'ARROW_LEFT':
      return <AIcon name="left" {...props} />;
    case 'PROFILE':
      return <AIcon name="user" {...props} />;
    default:
      return null;
  }
}
