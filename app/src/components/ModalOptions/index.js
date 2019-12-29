import React from 'react';
import Modal from 'react-native-modal';
import { ModalContainerView, Button, ButtonText } from './styles';

export default function ModalOptions({ isVisible = false, handleCloseModal }) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={() => handleCloseModal()}>
      <ModalContainerView>
        <Button>
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
