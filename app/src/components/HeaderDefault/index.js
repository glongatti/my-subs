import React from 'react';
import Icon from '../Icon';
import colors from '../../utils/colors';
import {
  LinearGradientView, PageTitleText, BackButton
} from './styles';

export default function HeaderDefault({ title, height, handleBack }) {
  return (
    <LinearGradientView
      colors={['rgba(51,206,147,0.5)', 'rgba(51,206,147,1)']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      useAngle
      angle={180}
      height={height}
    >
      {handleBack && (
        <BackButton onPress={() => handleBack()}>
          <Icon name="ARROW_LEFT" color={colors.primaryWhite} />
        </BackButton>
      )}
      <PageTitleText>{title}</PageTitleText>
    </LinearGradientView>
  );
}
