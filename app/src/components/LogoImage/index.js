import React from 'react';

import { ImageLogo } from './styles';

export default function LogoImage() {
  return (
    <ImageLogo source={require('../../assets/logo.png')} />
  );
}
