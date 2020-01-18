/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FA5Icon, FAIcon, MAIcon, MACIcon, AIcon, IOIcon, EIcon, SLIcon,
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
    case 'SHOW_EYE':
      return <IOIcon name="md-eye" {...props} />;
    case 'DONT_SHOW_EYE':
      return <IOIcon name="md-eye-off" {...props} />;
    case 'ADD_BUTTON':
      return <CircleView><IOIcon name="ios-add" {...props} /></CircleView>;
    case 'CREDIT_CARD':
      return <MAIcon name="credit-card" {...props} />;
    case 'CALENDAR':
      return <FAIcon name="calendar" {...props} />;
    case 'EDIT':
      return <MACIcon name="pencil-outline" {...props} />;
    case 'RETWEET':
      return <FAIcon name="retweet" {...props} />;
    case 'SEARCH':
      return <FAIcon name="search" {...props} />;
    case 'LIST':
      return <IOIcon name="md-menu" {...props} />;
    case 'MONEY':
      return <FA5Icon name="money-bill-wave" {...props} />;
    case 'TRASH':
      return <FAIcon name="trash-o" {...props} />;
    case 'MENU_DOTS':
      return <MACIcon name="dots-vertical" {...props} />;
    case 'COINS':
      return <MACIcon name="coins" {...props} />;
    case 'ARROW_LEFT':
      return <SLIcon name="arrow-left" {...props} />;
    case 'PROFILE':
      return <AIcon name="user" {...props} />;
    case 'USER':
      return <FAIcon name="user-o" {...props} />;
    case 'EMAIL':
      return <EIcon name="email" {...props} />;
    case 'PASSWORD':
      return <MAIcon name="lock-outline" {...props} />;
    default:
      return null;
  }
}
