import React from 'react';
import {
  InputTextWithMask, ViewInput, LabelInput, DefaultInputText,
} from './styles';
import Icon from '../Icon';

export default function TextInput({
  label, type, options, value, onTextChange, placeholder, icon
}) {
  return (
    <ViewInput>
      {label && (<LabelInput>{label}</LabelInput>)}

      {icon && (<Icon name={icon} />)}

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
        />
      )}
    </ViewInput>

  );
}
