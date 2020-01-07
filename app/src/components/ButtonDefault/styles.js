import styled from 'styled-components/native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export const DefaultButton = styled.TouchableOpacity`
border-width:1.3;
border-color:${colors.primaryWhite}
border-radius:60
width:260
height:50
display:flex;
justify-content:center
align-items:center
`;

export const ButtonText = styled.Text`
color:${colors.primaryWhite};
font-family:${fonts.regular};
font-size:18
`;
