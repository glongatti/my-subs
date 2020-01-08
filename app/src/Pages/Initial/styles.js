import styled from 'styled-components/native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;  
    flex-direction:column;
    background-color: ${colors.primaryGreen} ;
    justify-content:center;
    align-items:center;
`;

export const MainText = styled.Text`
    font-family:${fonts.light}
    font-size:25
    color:${colors.primaryWhite}
    text-align:center
    paddingHorizontal:17
    margin-bottom:10
`;

export const ButtonContainer = styled.View`
    margin-top:20
    margin-bottom:10
`;
