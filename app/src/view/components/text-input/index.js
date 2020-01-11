import React from 'react';
import Icon from '../icon';
import {
  InputTextWithMask, ViewInput, LabelInput, DefaultInputText,
} from './styles';

export default function TextInput({
  label, type, options, value, onTextChange,
  placeholder, icon, iconTop, iconLeft, iconPosition, keyboardType, iconSize
}) {
  return (
    <ViewInput>
      {label && (<LabelInput>{label}</LabelInput>)}

      {icon && (<Icon name={icon} top={iconTop} left={iconLeft} position={iconPosition} size={iconSize} />)}

      {type ? (
        <InputTextWithMask
          type={type}
          options={options}
          value={value}
          onChangeText={(text) => {
            onTextChange(text);
          }}
        />
      ) : (
        <DefaultInputText
          value={value}
          placeholder={placeholder}
          onChangeText={(text) => {
            onTextChange(text);
          }}
          keyboardType={keyboardType}
          secureTextEntry
        />
      )}
    </ViewInput>

  );
}
