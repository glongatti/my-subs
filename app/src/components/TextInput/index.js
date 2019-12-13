import React from 'react';
import {
  InputTextWithMask, ViewInput, LabelInput, DefaultInputText
} from './styles';

// import { Container } from './styles';

export default function TextInput({
  label, type, options, value, onTextChange, placeholder
}) {
  return (
    <ViewInput>
      {label && (<LabelInput>{label}</LabelInput>)}
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
