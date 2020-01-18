import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

import LogoImage from '../../components/logo-image';
import ButtonDefault from '../../components/button';
import BackHeader from '../../components/back-header';
import TextInput from '../../components/text-input';

import { ACTION_OPEN_REGISTER } from '../../../app/actions/navigator';
import { loginWithEmailPassword } from '../../../app/actions/user';

import colors from '../../../utils/colors';
import {
  SafeAreaView, FormView, FormItem, ScrollView,
  NoAccountText, FormFooter
} from './styles';


export default function Login() {
  const [email, setEmail] = useState('string@string.com');
  const [password, setPassword] = useState('string');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();


  const sendRequest = async () => {
    setIsLoading(true);
    dispatch(loginWithEmailPassword({ email, password }));
    setIsLoading(false);
  };

  return (
    <>

      <BackHeader
        color={colors.primaryGreen}
        size={30}
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
                isPassword
              />
            </FormItem>

            <FormFooter>
              <ButtonDefault
                text="Fazer Login"
                color={colors.primaryGreen}
                isLoading={isLoading}
                onPress={sendRequest}
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
