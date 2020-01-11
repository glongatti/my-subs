/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

import LogoImage from '../../components/logo-image';
import ButtonDefault from '../../components/button';
import BackHeader from '../../components/back-header';
import TextInput from '../../components/text-input';

// import { authenticateUser } from '../../../controllers/user';
import { ACTION_OPEN_REGISTER, ACTION_OPEN_TABS_SCREEN } from '../../../app/actions/navigator';

import colors from '../../../utils/colors';
import {
  SafeAreaView, FormView, FormItem, ScrollView,
  NoAccountText, FormFooter
} from './styles';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading] = useState(false);

  const dispatch = useDispatch();


  // const sendRequest = async () => {
  //   setIsLoading(true);
  //   dispatch({ action: ACTION_OPEN_TABS_SCREEN });

  //   try {
  //     const user = await authenticateUser({ email, password });
  //     if (user.resultType) {
  //       // logado
  //     } else {
  //       // deslogado
  //     }
  //   } catch (error) {
  //     Alert('Erro!');
  //     throw error;
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // };

  return (
    <>

      <BackHeader
        color={colors.primaryGreen}
        size={45}
        onBackPress={() => dispatch(StackActions.pop())}
      />

      <ScrollView>
        <SafeAreaView>
          <FormView>

            <LogoImage />


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

            <FormItem>
              <TextInput
                placeholder="Senha"
                value={password}
                onTextChange={(text) => setPassword(text)}
                icon="PASSWORD"
                iconPosition="absolute"
                iconTop={13}
                iconSize={25}
                secureTextEntry
              />
            </FormItem>

            <FormFooter>
              <ButtonDefault text="Fazer Login" color={colors.primaryGreen} isLoading={isLoading} onPress={() => dispatch({ type: ACTION_OPEN_TABS_SCREEN.action })} />
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
