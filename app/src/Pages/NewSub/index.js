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
        title="Cadastro de assinatura"
        handleBack={() => navigation.goBack()}
        renderCtaButton={() => (
          <AddButton>
            <Icon name="CREATE" size={45} color={colors.primaryWhite} />
          </AddButton>
        )}
      />
      <SafeAreaView>
        <ScrollView>
          <SubForm />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
