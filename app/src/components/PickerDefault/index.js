
import React from 'react';
import { Picker, ViewPicker, TextPicker } from './styles';

export default function PickerDefault({
  label, items, onSelectItem, value
}) {
  return (
    <ViewPicker>
      {label && (<TextPicker>{label}</TextPicker>)}
      <Picker
        mode="dialog"
        selectedValue={value}
        value={value}
        onValueChange={(value) => onSelectItem(value)}
      >
        {items && items.map((item) => (<Picker.Item label={item.label} value={item.value} />))}
      </Picker>
    </ViewPicker>
  );
}
