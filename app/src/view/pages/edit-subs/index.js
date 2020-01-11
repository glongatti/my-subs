import React from 'react';
import { Alert } from 'react-native';
import Icon from '../../components/icon';
import {
  SafeAreaView, ScrollView,
  AddButton, DeleteButton
} from './styles';
import colors from '../../../utils/colors';
import HeaderDefault from '../../components/header';
import SubForm from '../../components/subs-form';

export default function NewSub({ navigation }) {
  return (
    <>
      <HeaderDefault
        title="Edição de assinatura"
        handleBack={() => navigation.goBack()}
        renderCtaButton={() => (
          <>
            <DeleteButton onPress={() => {
              Alert.alert(
                'Atenção',
                'Tem certeza que deseja excluir essa assinatura?',
                [
                  { text: 'SIM', onPress: () => console.log('OK Pressed') },
                  {
                    text: 'CANCELAR',
                    onPress: () => console.log('Cancel Pressed'),
                  },
                ],
                { cancelable: false },
              );
            }}
            >
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
