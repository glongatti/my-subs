/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';

import LogoImage from '../../components/LogoImage';
import colors from '../../utils/colors';
import ButtonDefault from '../../components/ButtonDefault';
import BackHeader from '../../components/BackHeader';
import {
  SafeAreaView, FormView, FormItem, ScrollView,
  NoAccountText
} from './styles';

import { authenticateUser } from '../../controllers/user';
import { ACTION_OPEN_REGISTER } from '../../app/actions/navigator';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // const verifyEmail = async () => {};

  const sendRequest = async () => {
    setIsLoading(true);

    try {
      const user = await authenticateUser({ email, password });
      if (user.resultType) {
        // logado
      } else {
        // deslogado
      }
    } catch (error) {
      Alert('Erro!');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

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
              <Input
                placeholder="E-mail"
                leftIcon={(
                  <IconE
                    name="email"
                    size={24}
                    color={colors.primaryGreen}
                  />
                                )}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </FormItem>

            <FormItem>
              <Input
                placeholder="Senha"
                secureTextEntry
                leftIcon={(
                  <IconMA
                    name="lock-outline"
                    size={24}
                    color={colors.primaryGreen}
                  />
                                )}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </FormItem>


            <FormItem>
              <ButtonDefault text="Fazer Login" type="second" isLoading={isLoading} onPress={() => sendRequest()} />
            </FormItem>

            <TouchableOpacity onPress={() => dispatch({ type: ACTION_OPEN_REGISTER.action })}>
              <NoAccountText>Ainda não possui uma conta? Clique aqui</NoAccountText>
            </TouchableOpacity>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
