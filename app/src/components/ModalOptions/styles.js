import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const ModalContainerView = styled.View`
    background-color:${colors.primaryWhite}
`;

export const Button = styled.TouchableOpacity`
    borderWidth:0.5;
    borderColor:${colors.primaryGrey};
    height:50;
    display:flex;
    flexDirection:column;
    justify-content:center;
`;

export const ButtonText = styled.Text`
    font-size:20;
    text-align:center;
`;
