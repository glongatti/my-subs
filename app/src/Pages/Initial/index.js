import React from 'react';
import ButtonDefault from '../../components/ButtonDefault';
import LogoImage from '../../components/LogoImage';
import {
  Container, ButtonContainer, MainText
} from './styles';

export default function Initial({ navigation }) {
  return (
    <Container>

      <LogoImage />

      <MainText>
        Bora começar a organizar suas assinaturas?
      </MainText>

      <ButtonContainer>
        <ButtonDefault
          text="Quero me registrar"
          onPress={() => navigation.navigate('Register')}
        />
      </ButtonContainer>

      <ButtonContainer>
        <ButtonDefault
          text="Já tenho uma conta!"
        />
      </ButtonContainer>

    </Container>
  );
}
