/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { StackActions } from 'react-navigation';

import ButtonDefault from '../../components/ButtonDefault';
import LogoImage from '../../components/LogoImage';
import BackHeader from '../../components/BackHeader';
import colors from '../../utils/colors';
import {
  SafeAreaView, FormView, FormItem, CheckBoxTerms,
  TextTerms, ScrollView, AlreadyAccountText, AlreadyAccountButton,
} from './styles';

import { createUser } from '../../controllers/user';
import { isRegisterFormValid } from '../../utils/validators';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const showAlert = (title, message, buttons = [{ text: 'Ok', onPress: () => {} }]) => {
    Alert.alert(
      title,
      message,
      buttons,
      { cancelable: false },
    );
  };
  const sendRequest = async () => {
    setIsLoading(true);
    const validateForm = await isRegisterFormValid({
      name, email, password, terms
    });

    if (validateForm.isValid) {
      try {
        const { data } = await createUser({ name, email, password });
        if (data.resultType) {
          alert();
          showAlert('Parabéns', 'Usuário criado com sucesso!');
        } else {
          showAlert('Erro!', 'O e-mail inserido já está sendo usado.');
        }
      } catch (error) {
        showAlert('Erro!', 'Tente novamente mais tarde');
        throw error;
      } finally {
        setIsLoading(false);
      }
    } else {
      showAlert('Erro!', validateForm.errorMessage);
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
                placeholder="Nome"
                leftIcon={(
                  <IconFA
                    name="user-o"
                    size={24}
                    color={colors.primaryGreen}
                  />
                )}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </FormItem>

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

              <CheckBoxTerms
                center
                title="Ao utilizar o MySubs eu aceito os termos de condição e política de privacidade."
                checkedColor={colors.primaryGreen}
                checked={terms}
                onPress={() => setTerms(!terms)}
              />
            </FormItem>

            <TextTerms>
              Termos de Uso
            </TextTerms>

            <FormItem>
              <ButtonDefault text="Cadastrar" isLoading={isLoading} onPress={() => sendRequest()} type="second" />
            </FormItem>

            <AlreadyAccountButton>
              <AlreadyAccountText>
                Já possui uma conta no MySubs? Então clique aqui
              </AlreadyAccountText>
            </AlreadyAccountButton>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
