import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialFlowVerification } from '../../../app/actions/user';
import LogoImage from '../../components/logo-image';
import {
  Container, MainText
} from './styles';

export default function Splash() {
  const dispatch = useDispatch();
  useEffect(() => {
    // initial flow verification
    setTimeout(() => {
      dispatch(initialFlowVerification());
    }, 3000);
  }, []);
  return (
    <Container>

      <LogoImage />

      <MainText>
        Carregando...
      </MainText>


    </Container>
  );
}
