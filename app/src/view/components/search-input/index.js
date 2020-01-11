import React from 'react';

import { InputView, SearchInput } from './styles';
import Icon from '../icon';

export default function SearchInputText({ value, onTextChange }) {
  return (
    <InputView>
      <Icon name="SEARCH" position="absolute" top={5} left={18} />
      <SearchInput
        onChangeText={(text) => onTextChange(text)}
        value={value}
        placeholder="Procurar assinatura pelo nome..."
      />
    </InputView>
  );
}
