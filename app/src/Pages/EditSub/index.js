import React from 'react';

import Icon from '../../components/Icon';
import {
  SafeAreaView, ScrollView,
  AddButton
} from './styles';
import colors from '../../utils/colors';
import HeaderDefault from '../../components/HeaderDefault';
import SubForm from '../../components/SubForm';

export default function NewSub({ navigation }) {
  return (
    <>
      <HeaderDefault
        title="Edição de assinatura"
        handleBack={() => navigation.goBack()}
      />
      <SafeAreaView>
        <ScrollView>
          <SubForm />
        </ScrollView>
      </SafeAreaView>
      <AddButton>
        <Icon name="CREATE" size={45} color={colors.primaryWhite} />
      </AddButton>
    </>
  );
}
