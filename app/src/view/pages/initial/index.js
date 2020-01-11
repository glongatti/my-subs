import React from 'react';
import { useDispatch } from 'react-redux';

import * as NavigationActions from '../../../app/actions/navigator';
import ButtonDefault from '../../components/button';
import LogoImage from '../../components/logo-image';
import {
  Container, ButtonContainer, MainText
} from './styles';

export default function Initial() {
  const dispatch = useDispatch();
  return (
    <Container>

      <LogoImage />

      <MainText>
        Bora começar a organizar suas assinaturas?
      </MainText>

      <ButtonContainer>
        <ButtonDefault
          text="Quero me registrar"
          onPress={() => dispatch({ type: NavigationActions.ACTION_OPEN_REGISTER.action })}
        />
      </ButtonContainer>

      <ButtonContainer>
        <ButtonDefault
          text="Já tenho uma conta!"
          onPress={() => dispatch({ type: NavigationActions.ACTION_OPEN_LOGIN.action })}
        />
      </ButtonContainer>

    </Container>
  );
}
