import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

import { Alert } from 'react-native';
import LogoImage from '../../components/logo-image';
import ButtonDefault from '../../components/button';
import BackHeader from '../../components/back-header';
import TextInput from '../../components/text-input';
import ModalLoading from '../../components/modal-loading';

import { ACTION_OPEN_REGISTER, ACTION_OPEN_LOGIN } from '../../../app/actions/navigator';

import colors from '../../../utils/colors';
import {
  SafeAreaView, FormView, FormItem, ScrollView,
  NoAccountText, FormFooter, PageTitle
} from './styles';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();


  const sendRequest = async () => {
    setIsLoading(true);
    Alert.alert('Acabamos de enviar um e-mail com uma senha temporaria');
    dispatch({ type: ACTION_OPEN_LOGIN.action });
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (<ModalLoading />)}
      <BackHeader
        color={colors.primaryGreen}
        size={30}
        onBackPress={() => dispatch(StackActions.pop())}
      />

      <ScrollView>
        <SafeAreaView>
          <FormView>

            <LogoImage />

            <PageTitle>
                            Esqueceu sua senha? não tem problema, insira o seu e-mail para que possamos lhe ajudar
            </PageTitle>

            <FormItem>
              <TextInput
                placeholder="E-mail"
                value={email}
                onTextChange={(text) => setEmail(text)}
                icon="EMAIL"
                iconPosition="absolute"
                iconTop={13}
                iconSize={25}
              />
            </FormItem>

            <FormFooter>
              <ButtonDefault
                text="Enviar"
                color={colors.primaryGreen}
                onPress={async () => sendRequest()}
              />
            </FormFooter>

            <TouchableOpacity onPress={() => dispatch({ type: ACTION_OPEN_REGISTER.action })}>
              <NoAccountText>Ainda não tem uma conta? Clique aqui</NoAccountText>
            </TouchableOpacity>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
