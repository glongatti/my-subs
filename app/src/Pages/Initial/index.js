import React from 'react';
import { connect } from 'react-redux';

import * as NavigationActions from '../../app/actions/navigator';
import ButtonDefault from '../../components/ButtonDefault';
import LogoImage from '../../components/LogoImage';
import {
  Container, ButtonContainer, MainText
} from './styles';

function Initial(props) {
  return (
    <Container>

      <LogoImage />

      <MainText>
        Bora começar a organizar suas assinaturas?
      </MainText>

      <ButtonContainer>
        <ButtonDefault
          text="Quero me registrar"
          onPress={() => props.openRegisterScreen()}
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

function mapDispatchToProps(dispatch) {
  return {
    openRegisterScreen: () => dispatch({ type: NavigationActions.ACTION_OPEN_REGISTER.action })
  };
}

export default connect(null, mapDispatchToProps)(Initial);
