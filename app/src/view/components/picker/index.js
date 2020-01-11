
import React from 'react';
import { Picker, ViewPicker, TextPicker } from './styles';
import Icon from '../icon';

export default function PickerDefault({
  label, items, onSelectItem, value, icon, iconTop, iconLeft, iconPosition
}) {
  return (
    <ViewPicker>
      {label && (<TextPicker>{label}</TextPicker>)}
      {icon && (<Icon name={icon} top={iconTop} left={iconLeft} position={iconPosition} />)}
      <Picker
        mode="dialog"
        selectedValue={value}
        value={value}
        onValueChange={(value) => onSelectItem(value)}
      >
        {items && items.map((item) => (<Picker.Item key={item.id} label={item.label} value={item.value} />))}
      </Picker>
    </ViewPicker>
  );
}
