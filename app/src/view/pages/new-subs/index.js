import React from 'react';

import Icon from '../../components/icon';
import {
  SafeAreaView, ScrollView,
  AddButton
} from './styles';
import colors from '../../../utils/colors';
import HeaderDefault from '../../components/header';
import SubForm from '../../components/subs-form';

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
