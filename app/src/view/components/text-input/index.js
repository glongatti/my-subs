import React, { useState } from 'react';
import Icon from '../icon';
import {
  InputTextWithMask, ViewInput, LabelInput, DefaultInputText,
  PasswordButton
} from './styles';

export default function TextInput({
  label, type, options, value, onTextChange,
  placeholder, icon, iconTop, iconLeft, iconPosition, keyboardType, iconSize, isPassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
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
        <>
          <DefaultInputText
            value={value}
            placeholder={placeholder}
            onChangeText={(text) => {
              onTextChange(text);
            }}
            keyboardType={keyboardType}
            secureTextEntry={isPassword && !showPassword}
          />
        </>
      )}
      {isPassword && (
        <PasswordButton
          style={{

          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword
            ? (<Icon name="DONT_SHOW_EYE" position="absolute" size={28} />)
            : (<Icon name="SHOW_EYE" position="absolute" size={28} />)}
        </PasswordButton>
      )}
    </ViewInput>

  );
}
