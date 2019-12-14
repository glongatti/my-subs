import React from 'react';
import { FA5Icon, FAIcon, MAIcon } from './styles';

export default function Icon({ name, size }) {
  switch (name) {
    case 'CREDIT_CARD':
      return <MAIcon name="credit-card" size={size} />;
    case 'RETWEET':
      return <FAIcon name="retweet" size={size} />;
    case 'MONEY':
      return <FA5Icon name="money-bill-wave" size={size} />;
    default:
      return null;
  }
}
