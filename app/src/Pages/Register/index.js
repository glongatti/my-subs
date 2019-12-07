import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import colors from '../../utils/colors';
import ButtonDefault from '../../components/ButtonDefault';
import {
  SafeAreaView, FormView, LogoImage, FormItem, CheckBoxTerms,
} from './styles';

export default function Register() {
  return (
    <>
      <SafeAreaView>

        {/* <LogoView>
          <LogoImage
            source={require('../../assets/logo.png')}
          />
        </LogoView> */}

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
            />
          </FormItem>

          {/* <FormItem> */}
          <CheckBoxTerms
            center
            title="Ao utilizar o MySubs eu aceito os termos de condição e política de privacidade."
            checkedColor={colors.primaryGreen}
            checked
          />
          {/* </FormItem> */}

          <FormItem>
            <ButtonDefault title="Cadastrar" />
          </FormItem>

        </FormView>
      </SafeAreaView>
    </>
  );
}
