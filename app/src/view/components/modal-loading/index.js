import React from 'react';
import { Modal, ModalContainer, ActivityIndicator } from './styles';
import colors from '../../../utils/colors';

export default function ModalLoading() {
  return (
    <Modal
      animationType="fade"
      transparent
      visible
    >
      <ModalContainer>
        <ActivityIndicator size="large" color={colors.primaryGreen} />
      </ModalContainer>
    </Modal>
  );
}
