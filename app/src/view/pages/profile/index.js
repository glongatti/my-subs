import React from 'react';
import { Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

import { useDispatch } from 'react-redux';
import Header from '../../components/header';
import Icon from '../../components/icon';
import ButtonDefault from '../../components/button';

import { logoutUser } from '../../../app/actions/user';
import {
  Container, AvatarView, UserNameText, UserEmailText,
  EditButton, CardContainer, CardItemTitle, CardBody, CardTitle,
  CardItem, CardItemBodyText, ButtonContainer
} from './styles';
import colors from '../../../utils/colors';

export default function Profile() {
  const dispatch = useDispatch();
  return (
    <>
      <Header
        height={120}
        title="Meu Perfil"
        renderCtaButton={() => (
          <>
            <EditButton>
              <Icon name="EDIT" size={30} color={colors.primaryWhite} />
            </EditButton>
          </>
        )}
        renderProfileAvatar={
          () => (
            <AvatarView>
              <Avatar
                title="GL"
                size={100}
                rounded
                titleStyle={{
                  fontFamily: 'Roboto-Thin'
                }}
              />
            </AvatarView>
          )
        }
        titleStyle={{
          marginBottom: '60'
        }}
      />

      <Container>
        <UserNameText>
          Gabriel Longatti
        </UserNameText>

        <UserEmailText>
          longattigabriel@gmail.com
        </UserEmailText>

        <CardTitle>Assinaturas</CardTitle>
        <CardContainer>
          <CardBody>
            <CardItem>
              <CardItemTitle>Criadas</CardItemTitle>
              <CardItemBodyText>10</CardItemBodyText>
            </CardItem>
            <CardItem>
              <CardItemTitle>Ativas</CardItemTitle>
              <CardItemBodyText>02</CardItemBodyText>
            </CardItem>
            <CardItem>
              <CardItemTitle>Vão renovar</CardItemTitle>
              <CardItemBodyText>08</CardItemBodyText>
            </CardItem>
          </CardBody>
        </CardContainer>

        <ButtonContainer>
          <ButtonDefault
            text="Finalizar sessão"
            color={colors.primaryGreen}
            onPress={() => Alert.alert(
              'Atenção',
              'Deseja realmente fazer loggof?',
              [
                {
                  text: 'Sim',
                  onPress: () => dispatch(logoutUser())
                },
                {
                  text: 'Não',
                  onPress: () => {}
                },

              ],
              {
                cancelable: true
              }
            )}


          />
        </ButtonContainer>
      </Container>

    </>
  );
}
