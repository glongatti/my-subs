/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';

import colors from '../../utils/colors';
import ButtonDefault from '../../components/ButtonDefault';
import {
  SafeAreaView, FormView, LogoImage, FormItem, CheckBoxTerms,
  TextTerms, ScrollView
} from './styles';

import { createUser } from '../../controllers/user';
import { isRegisterFormValid } from '../../utils/validators';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // const verifyEmail = async () => {};

  const sendRequest = async () => {
    setIsLoading(true);
    const validateForm = await isRegisterFormValid({
      name, email, password, terms
    });

    if (validateForm.isValid) {
      alert(terms);
      try {
        await createUser({ name, email, password });
      } catch (error) {
        Alert('Erro!');
        throw error;
      } finally {
        setIsLoading(false);
      }
    } else {
      alert(validateForm.errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <FormView>

            <LogoImage
              source={require('../../assets/logo.png')}
            />

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
              <ButtonDefault title="Cadastrar" isLoading={isLoading} onPress={() => sendRequest()} />
            </FormItem>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
