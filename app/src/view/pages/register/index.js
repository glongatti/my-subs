/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { StackActions } from 'react-navigation';

import TextInput from '../../components/text-input';
import ButtonDefault from '../../components/button';
import LogoImage from '../../components/logo-image';
import BackHeader from '../../components/back-header';
import ModalLoading from '../../components/modal-loading';

import { registerUser } from '../../../app/actions/user';
import { isRegisterFormValid } from '../../../utils/validators';

import colors from '../../../utils/colors';
import {
  SafeAreaView, FormView, FormItem, CheckBoxTerms,
  TextTerms, ScrollView, AlreadyAccountText, AlreadyAccountButton,
  TermsCheckboxContainer
} from './styles';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const showAlert = (title, message, buttons = [{ text: 'Ok', onPress: () => { } }]) => {
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
      name, email, password, confirmPassword, terms
    });

    if (validateForm.isValid) {
      await dispatch(registerUser({ name, email, password }));
    } else {
      showAlert('Erro!', validateForm.errorMessage);
    }
    setIsLoading(false);
  };

  return (
    <>
      <BackHeader
        color={colors.primaryGreen}
        size={30}
        onBackPress={() => dispatch(StackActions.pop())}
      />
      {isLoading && (<ModalLoading />)}
      <ScrollView>
        <SafeAreaView>
          <FormView>
            <LogoImage />

            <FormItem>
              <TextInput
                placeholder="Nome"
                value={name}
                onTextChange={(text) => setName(text)}
                icon="USER"
                iconPosition="absolute"
                iconTop={13}
                iconSize={25}
              />
            </FormItem>

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

            <FormItem>
              <TextInput
                placeholder="Confirmação da senha"
                value={confirmPassword}
                onTextChange={(text) => setConfirmPassword(text)}
                icon="PASSWORD"
                iconPosition="absolute"
                iconTop={13}
                iconSize={25}
                isPassword
              />
            </FormItem>


            <FormItem>
              <TermsCheckboxContainer
                onPress={() => setTerms(!terms)}
              >
                <CheckBoxTerms
                  center
                  checkedColor={colors.primaryGreen}
                  checked={terms}
                />
                <TextTerms>
                  Ao utilizar o MySubs eu aceito os termos de condição e política de privacidade.
                </TextTerms>
              </TermsCheckboxContainer>
            </FormItem>

            {/* <TextTerms>
              Termos de Uso
            </TextTerms> */}

            <FormItem>
              <ButtonDefault text="Cadastrar" onPress={() => sendRequest()} color={colors.primaryGreen} />
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
