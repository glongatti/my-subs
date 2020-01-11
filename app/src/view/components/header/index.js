/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Icon from '../icon';
import colors from '../../../utils/colors';
import {
  LinearGradientView, PageTitleText, BackButton
} from './styles';

export default function HeaderDefault({
  title, height, handleBack, renderCtaButton,
  renderProfileAvatar, titleStyle
}) {
  return (
    <LinearGradientView
      colors={['rgba(51,206,147,0.5)', 'rgba(51,206,147,1)']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      useAngle
      angle={180}
      height={height}
      alignItems={renderProfileAvatar ? 'center' : 'flex-start'}
    >
      {handleBack && (
        <BackButton onPress={() => handleBack()}>
          <Icon name="ARROW_LEFT" color={colors.primaryWhite} size={45} top={10} left={10} />
        </BackButton>
      )}

      {title && (<PageTitleText {...titleStyle}>{title}</PageTitleText>)}

      {renderProfileAvatar && renderProfileAvatar()}

      {renderCtaButton && renderCtaButton()}

    </LinearGradientView>
  );
}
