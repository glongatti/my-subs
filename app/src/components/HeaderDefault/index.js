import React from 'react';
import {
  LinearGradientView, PageTitleText
} from './styles';

export default function HeaderDefault({ title, height }) {
  return (
    <LinearGradientView
      colors={['rgba(51,206,147,0.5)', 'rgba(51,206,147,1)']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      useAngle
      angle={180}
      height={height}
    >
      <PageTitleText>{title}</PageTitleText>
    </LinearGradientView>
  );
}
