import React from 'react';

import { InputView, SearchInput } from './styles';
import Icon from '../Icon';

export default function SearchInputText() {
  return (
    <InputView>
      <Icon name="SEARCH" position="absolute" top={5} left={18} />
      <SearchInput
        // onChangeText={(text) => onChangeText(text)}
        value=""
        placeholder="Procurar assinatura..."
      />
    </InputView>
  );
}
