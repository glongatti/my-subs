import React from 'react';
import Modal from 'react-native-modal';
import { ModalContainerView, Button, ButtonText } from './styles';

export default function ModalOptions({ isVisible = false, handleCloseModal, navigation }) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={() => handleCloseModal()}>
      <ModalContainerView>
        <Button onPress={() => {
          handleCloseModal();
          navigation.navigate('NewSub', {
            subId: 13,
          });
        }}
        >
          <ButtonText>
            Editar
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            Excluir
          </ButtonText>
        </Button>
      </ModalContainerView>
    </Modal>
  );
}
