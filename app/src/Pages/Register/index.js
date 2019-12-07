import React, { useState } from 'react';
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

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ScrollView contentContainerStyle>
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
              <ButtonDefault title="Cadastrar" isLoading={isLoading} onPress={() => setIsLoading(true)} />
            </FormItem>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
