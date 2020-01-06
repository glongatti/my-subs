import styled from 'styled-components/native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export const InputView = styled.View`
    display:flex;
    alignItems:flex-start;
    border-bottom-width:0.5;
    border-color:${colors.primaryGrey};
    height:40;
`;

export const SearchInput = styled.TextInput`
color:${colors.primaryBlack};
marginLeft:52;
fontSize:16;
fontFamily:${fonts.regular};
`;
