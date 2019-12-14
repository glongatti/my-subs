import React from 'react';
import {
  FA5Icon, FAIcon, MAIcon, MACIcon, AIcon
} from './styles';

export default function Icon({ name, size }) {
  switch (name) {
    case 'CREDIT_CARD':
      return <MAIcon name="credit-card" size={size} />;
    case 'CALENDAR':
      return <FAIcon name="calendar" size={size} />;
    case 'RETWEET':
      return <FAIcon name="retweet" size={size} />;
    case 'MONEY':
      return <FA5Icon name="money-bill-wave" size={size} />;
    case 'COINS':
      return <MACIcon name="coins" size={size} />;
    case 'ARROW_LEFT':
      return <AIcon name="left" size={size} />;
    default:
      return null;
  }
}
