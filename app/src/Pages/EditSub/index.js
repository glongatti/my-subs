import React from 'react';

import Icon from '../../components/Icon';
import {
  SafeAreaView, ScrollView,
  AddButton, DeleteButton
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
        renderCtaButton={() => (
          <>
            <DeleteButton>
              <Icon name="TRASH" size={30} color={colors.primaryWhite} />
            </DeleteButton>
            <AddButton>
              <Icon name="CREATE" size={45} color={colors.primaryWhite} />
            </AddButton>
          </>
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
