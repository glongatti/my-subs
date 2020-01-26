import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.View`
    flex: 1;  
    flex-direction:column;
    background-color: ${colors.primaryWhite} ;
    justify-content:center;
    align-items:center;
`;

export const MainText = styled.Text`
    font-family:${fonts.light}
    font-size:25
    color:${colors.primaryGreen}
    text-align:center
    paddingHorizontal:17
    margin-bottom:10
`;
